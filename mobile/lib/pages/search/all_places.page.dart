import 'package:auto_route/auto_route.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';
import 'package:immich_mobile/extensions/asyncvalue_extensions.dart';
import 'package:immich_mobile/models/search/search_curated_content.model.dart';
import 'package:immich_mobile/providers/search/search_page_state.provider.dart';
import 'package:immich_mobile/widgets/search/explore_grid.dart';

@RoutePage()
class AllPlacesPage extends HookConsumerWidget {
  const AllPlacesPage({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    AsyncValue<List<SearchCuratedContent>> places = ref.watch(getAllPlacesProvider);

    return Scaffold(
      appBar: AppBar(
        title: const Text(
          'places',
        ).tr(),
        leading: IconButton(
          onPressed: () => context.maybePop(),
          icon: const Icon(Icons.arrow_back_ios_rounded),
        ),
      ),
      body: places.widgetWhen(
        onData: (data) => ExploreGrid(
          curatedContent: data,
        ),
      ),
    );
  }
}
