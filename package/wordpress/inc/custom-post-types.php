<?php

add_action(
	'init',
	function () {
		register_custom_post_type( 'Case Studies', 'case_studies', 'caseStudies', 'caseStudy', false, array( 'title', 'thumbnail' ), array( 'case_studies_tags' ), 'dashicons-welcome-learn-more' );
	}
);

function register_custom_post_type( $name, $slug, $graphql_plural_name, $graphql_single_name, $public, $supports, $taxonomies, $dashicon = 'dashicons-plus' ) {
	if ( ! isset( $labels ) ) {
		$labels = array(
			'name'               => ucfirst( $name ),
			'singular_name'      => ucfirst( $name ),
			'add_new'            => __( 'Add New', 'engine' ),
			'add_new_item'       => __( 'Add New', 'engine' ),
			'edit_item'          => __( 'Edit', 'engine' ),
			'new_item'           => __( 'New', 'engine' ),
			'view_item'          => __( 'View', 'engine' ),
			'search_items'       => __( 'Search', 'engine' ),
			'not_found'          => __( 'No found.', 'engine' ),
			'not_found_in_trash' => __( 'No found', 'engine' ),
			'parent_item_colon'  => '',
		);
	}

	$args = array(
		'labels'              => $labels,
		'public'              => true,
		'publicly_queryable'  => $public,
		'show_in_rest'        => true,
		'exclude_from_search' => true,
		'show_ui'             => true,
		'has_archive'         => false,
		'hierarchical'        => false,
		'menu_position'       => 20,
		'rewrite'             => array( 'slug' => $slug ),
		'supports'            => $supports,
		'taxonomies'          => $taxonomies,
		'menu_icon'           => $dashicon,
		'show_in_graphql'     => true,
		'graphql_single_name' => $graphql_single_name,
		'graphql_plural_name' => $graphql_plural_name,
	);
	register_post_type( strtolower( $slug ), $args );
}
