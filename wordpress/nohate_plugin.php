<?php
/**
 * Plugin Name: Referrer plugin
 * Plugin URI: http://TBC
 * Description: Inserts javascript into wordpress to redirect referrers from hateful sites. No configuration currently.
 * Version: 0.1
 * Author: James Billingham / @ool0n
 * Author URI: http://
 * License: GPL2 (?)
 */
 
*/
class referrer_widget extends WP_Widget {
	function __construct() {
		parent::__construct(false, $name = __('referrer));
	}
	function form() {
	}
	function update() {
	}
	function widget($args, $instance) {
		?>
		<div class="widget referrer">
			<p>TSS Referrer Widget</p>
			// Insert javascript here.
		</div>
		<?php
	}
}
function register_referrer()
{
    register_widget( 'referrer' );
}
add_action( 'widgets_init', 'register_referrer');
?>

