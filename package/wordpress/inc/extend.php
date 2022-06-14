<?php

add_action( 'init', 'register_nav' );
function register_nav() {
	register_nav_menus(
		array(
			'main_menu' => __( 'Menu' ),
		)
	);
}

if ( function_exists( 'acf_add_options_page' ) ) {
	acf_add_options_page(
		array(
			'page_title'      => 'Options',
			'menu_title'      => 'Options',
			'menu_slug'       => 'global_options',
			'capability'      => 'edit_posts',
			'show_in_graphql' => true,
			'redirect'        => false,
		)
	);
}

add_filter( 'intermediate_image_sizes_advanced', 'prefix_remove_default_images' );
function prefix_remove_default_images( $sizes ) {
	unset( $sizes['medium'] );
	unset( $sizes['large'] );
	unset( $sizes['medium_large'] );
	unset( $sizes['1536x1536'] );
	unset( $sizes['2048x2048'] );
	return $sizes;
}

add_theme_support( 'post-thumbnails' );

add_action( 'admin_head', 'hide_editor' );
function hide_editor() {
	remove_post_type_support( 'page', 'editor' );
}

add_action( 'init', 'remove_comment_support', 100 );
function remove_comment_support() {
	remove_post_type_support( 'post', 'comments' );
	remove_post_type_support( 'page', 'comments' );
}

add_action( 'admin_menu', 'remove_from_menu' );
function remove_from_menu() {
	remove_menu_page( 'edit-comments.php' );
}


// remove yoast comment
add_filter( 'wpseo_debug_markers', '__return_false' );

// add tracking acf options page (gatsbyWP)
use WPGatsby\ActionMonitor\Monitors\Monitor;
class AcfOptionsMonitor extends Monitor {
	public function init() {
		add_action(
			'acf/save_post',
			function( $id ) {
				if ( 'options' === $id ) {
					$page = isset( $_GET['page'] ) ? $_GET['page'] : 'Options page';
					$this->trigger_schema_diff(
						array(
							'title' => $page . ' has been updated',
						)
					);
				}
			}
		);
	}
}

add_filter(
	'gatsby_action_monitors',
	function( $monitors, $action_monitor ) {
		$acf_options_monitor = new AcfOptionsMonitor( $action_monitor );
		$acf_options_monitor->init();
		$monitors['AcfOptionsMonitor'] = $acf_options_monitor;
		return $monitors;
	},
	10,
	2
);