<?php

namespace App\Tags;

use Statamic\Tags\Tags;

class Vite extends Tags
{
    /**
     * The {{ vite }} tag.
     *
     * @return string|array
     */
    public function index()
    {
        return app('Illuminate\Foundation\Vite')('resources/js/site.js');
    }

    /**
     * The {{ vite:example }} tag.
     *
     * @return string|array
     */
    public function css()
    {
        //
        //return app('Illuminate\Foundation\Vite')('resources/css/style.scss');
    }
}
