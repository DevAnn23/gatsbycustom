<?php
if ( ! get_site_url() . '/graphql' ) {
	wp_redirect( admin_url() );
	exit;
}
