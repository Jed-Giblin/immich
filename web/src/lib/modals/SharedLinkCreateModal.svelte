<script lang="ts">
  import SettingSelect from '$lib/components/shared-components/settings/setting-select.svelte';
  import {SettingInputFieldType} from '$lib/constants';
  import {locale} from '$lib/stores/preferences.store';
  import {handleError} from '$lib/utils/handle-error';
  import {SharedLinkType, createSharedLink, updateSharedLink, type SharedLinkResponseDto} from '@immich/sdk';
  import {Button, Modal, ModalBody, ModalFooter} from '@immich/ui';
  import {mdiLink} from '@mdi/js';
  import {DateTime, Duration} from 'luxon';
  import {t} from 'svelte-i18n';
  import {NotificationType, notificationController} from '../components/shared-components/notification/notification';
  import SettingInputField from '../components/shared-components/settings/setting-input-field.svelte';
  import SettingSwitch from '../components/shared-components/settings/setting-switch.svelte';

  interface Props {
    onClose: (sharedLink?: SharedLinkResponseDto) => void;
    albumId?: string | undefined;
    assetIds?: string[];
    editingLink?: SharedLinkResponseDto | undefined;
  }

  let {onClose, albumId = $bindable(undefined), assetIds = $bindable([]), editingLink = undefined}: Props = $props();

  let sharedLink: string | null = $state(null);
  let description = $state('');
  let allowDownload = $state(true);
  let allowUpload = $state(false);
  let showMetadata = $state(true);
  let expirationOption: number = $state(0);
  let password = $state('');
  let slug = $state('');
  let addSlug = $state(false);
  let shouldChangeExpirationTime = $state(false);
  let enablePassword = $state(false);

  const expirationOptions: [number, Intl.RelativeTimeFormatUnit][] = [
    [30, 'minutes'],
    [1, 'hour'],
    [6, 'hours'],
    [1, 'day'],
    [7, 'days'],
    [30, 'days'],
    [3, 'months'],
    [1, 'year'],
  ];

  let relativeTime = $derived(new Intl.RelativeTimeFormat($locale));
  let expiredDateOptions = $derived([
    {text: $t('never'), value: 0},
    ...expirationOptions.map(([value, unit]) => ({
      text: relativeTime.format(value, unit),
      value: Duration.fromObject({[unit]: value}).toMillis(),
    })),
  ]);

  let shareType = $derived(albumId ? SharedLinkType.Album : SharedLinkType.Individual);

  $effect(() => {
    if (!showMetadata) {
      allowDownload = false;
    }
  });

  if (editingLink) {
    if (editingLink.description) {
      description = editingLink.description;
    }
    if (editingLink.password) {
      password = editingLink.password;
    }
    if ( editingLink.slug ) {
      slug = editingLink.slug;
    }
    allowUpload = editingLink.allowUpload;
    allowDownload = editingLink.allowDownload;
    showMetadata = editingLink.showMetadata;

    albumId = editingLink.album?.id;
    assetIds = editingLink.assets.map(({id}) => id);

    enablePassword = !!editingLink.password;
    addSlug = !!editingLink.slug;
  }

  const handleCreateSharedLink = async () => {
    const expirationDate = expirationOption > 0 ? DateTime.now().plus(expirationOption).toISO() : undefined;

    try {
      const data = await createSharedLink({
        sharedLinkCreateDto: {
          type: shareType,
          albumId,
          assetIds,
          expiresAt: expirationDate,
          allowUpload,
          description,
          password,
          allowDownload,
          showMetadata,
          slug
        },
      });
      onClose(data);
    } catch (error) {
      handleError(error, $t('errors.failed_to_create_shared_link'));
    }
  };

  const slugToggle = async () => {
    console.log('Slug Toggle Fire')
    if ( slug && !addSlug ) {
      slug = '';
    }
  }

  const handleEditLink = async () => {
    if (!editingLink) {
      return;
    }

    try {
      const expirationDate = expirationOption > 0 ? DateTime.now().plus(expirationOption).toISO() : null;

      await updateSharedLink({
        id: editingLink.id,
        sharedLinkEditDto: {
          description,
          password: enablePassword ? password : '',
          expiresAt: shouldChangeExpirationTime ? expirationDate : undefined,
          allowUpload,
          allowDownload,
          showMetadata,
          slug
        },
      });

      notificationController.show({
        type: NotificationType.Info,
        message: $t('edited'),
      });

      onClose();
    } catch (error) {
      handleError(error, $t('errors.failed_to_edit_shared_link'));
    }
  };

  const getTitle = () => {
    if (sharedLink) {
      return $t('view_link');
    }
    if (editingLink) {
      return $t('edit_link');
    }
    return $t('create_link_to_share');
  };
</script>

<Modal title={getTitle()} icon={mdiLink} size="small" {onClose}>
  <ModalBody>
    {#if shareType === SharedLinkType.Album}
      {#if !editingLink}
        <div>{$t('album_with_link_access')}</div>
      {:else}
        <div class="text-sm">
          {$t('public_album')} |
          <span class="text-immich-primary dark:text-immich-dark-primary">{editingLink.album?.albumName}</span>
        </div>
      {/if}
      {#if addSlug}
        <div class="text-sm text-warning">{$t('album_with_slug_warning')}</div>
      {/if}
    {/if}

    {#if shareType === SharedLinkType.Individual}
      {#if !editingLink}
        <div>{$t('create_link_to_share_description')}</div>
      {:else}
        <div class="text-sm">
          {$t('individual_share')} |
          <span class="text-immich-primary dark:text-immich-dark-primary">{editingLink.description || ''}</span>
        </div>
      {/if}
    {/if}

    <div class="mb-2 mt-4">
      <p class="text-xs">{$t('link_options').toUpperCase()}</p>
    </div>
    <div class="rounded-lg bg-gray-100 p-4 dark:bg-black/40 overflow-y-auto">
      <div class="flex flex-col">
        <div class="mb-2">
          <SettingInputField
            inputType={SettingInputFieldType.TEXT}
            label={$t('description')}
            bind:value={description}
          />
        </div>

        <div class="mb-2">
          <SettingInputField
            inputType={SettingInputFieldType.TEXT}
            label={$t('password')}
            bind:value={password}
            disabled={!enablePassword}
          />
        </div>

        <div class="my-3">
          <SettingSwitch bind:checked={enablePassword} title={$t('require_password')}/>
        </div>

        <div class="my-3">
          <SettingSwitch bind:checked={showMetadata} title={$t('show_metadata')}/>
        </div>

        <div class="my-3">
          <SettingSwitch
            bind:checked={allowDownload}
            title={$t('allow_public_user_to_download')}
            disabled={!showMetadata}
          />
        </div>

        <div class="my-3">
          <SettingSwitch bind:checked={allowUpload} title={$t('allow_public_user_to_upload')}/>
        </div>

        {#if editingLink}
          <div class="my-3">
            <SettingSwitch bind:checked={shouldChangeExpirationTime} title={$t('change_expiration_time')}/>
          </div>
        {/if}
        <div class="my-3">
          <SettingSwitch bind:checked={addSlug} onToggle={slugToggle} title={$t('public_vanity_url')}/>
        </div>
        {#if addSlug }
          <div class="mb-2">
            <SettingInputField
              inputType={SettingInputFieldType.TEXT}
              label={"URL Slug"}
              bind:value={slug}
              disabled={!addSlug}
            />
          </div>
        {/if}
        <div class="mt-3">
          <SettingSelect
            bind:value={expirationOption}
            options={expiredDateOptions}
            label={$t('expire_after')}
            disabled={editingLink && !shouldChangeExpirationTime}
            number={true}
          />
        </div>
      </div>
    </div>
  </ModalBody>

  <ModalFooter>
    {#if editingLink}
      <Button fullWidth onclick={handleEditLink}>{$t('confirm')}</Button>
    {:else}
      <Button fullWidth onclick={handleCreateSharedLink}>{$t('create_link')}</Button>
    {/if}
  </ModalFooter>
</Modal>
