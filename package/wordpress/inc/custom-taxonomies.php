<?php

add_action(
	'init',
	function () {
	}
);

function register_custom_taxonomy( $name, $slug, $graphql_plural_name, $graphql_single_name, $posttype, $hierarchical = false ) {
	if ( ! isset( $labels ) ) {
		$labels = array(
			'name'              => ucfirst( $name ),
			'singular_name'     => ucfirst( $name ),
			'search_items'      => __( 'Search items' ),
			'all_items'         => __( 'All items' ),
			'parent_item'       => __( 'Parent item' ),
			'parent_item_colon' => __( 'Parent item:' ),
			'edit_item'         => __( 'Edit item' ),
			'update_item'       => __( 'Update item' ),
			'add_new_item'      => __( 'Add New item' ),
			'new_item_name'     => __( 'New item' ),
			'menu_name'         => ucfirst( $name ),
		);
	}
	register_taxonomy(
		$slug,
		$posttype,
		array(
			'hierarchical'        => $hierarchical,
			'labels'              => $labels,
			'show_ui'             => true,
			'show_admin_column'   => true,
			'rewrite'             => array(
				'slug' => strtolower( $slug ),
			),
			'show_in_graphql'     => true,
			'graphql_single_name' => $graphql_single_name,
			'graphql_plural_name' => $graphql_plural_name,
		)
	);
}

