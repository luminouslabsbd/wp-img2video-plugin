<?php

class Create_Admin_Menu{
    public function __construct()
    {
        add_action( 'admin_menu', array( $this, 'create_admin_menu' ) );
    }

    public function create_admin_menu(){
        $capability = 'manage_options';
        $slug = 'my-react-plugin-settings';

        add_menu_page(
            __( 'React Plugin', 'my-react-plugin' ),
            __( 'React Plugin', 'my-react-plugin' ),
            $capability,
            $slug,
            [$this,'menu_page_template'],
            'dashicons-admin-plugins',
        );
    }

    public function menu_page_template(){
        echo '<div class="wrap"><div id="root"></div></div>';
    }
}

new Create_Admin_Menu();