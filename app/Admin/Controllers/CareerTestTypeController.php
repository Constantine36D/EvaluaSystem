<?php

namespace App\Admin\Controllers;

use App\Models\Career_test_type;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class CareerTestTypeController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'Career_test_type';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Career_test_type());

        $grid->column('id', __('Id'));
        $grid->column('type', __('Type'));
        $grid->column('info', __('信息'));

        return $grid;
    }

    /**
     * Make a show builder.
     *
     * @param mixed $id
     * @return Show
     */
    protected function detail($id)
    {
        $show = new Show(Career_test_type::findOrFail($id));

        $show->field('id', __('Id'));
        $show->field('type', __('Type'));
        $show->field('info', __('信息'));

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new Career_test_type());

        $form->text('type', __('Type'));
        $form->text('info', __('信息'));

        return $form;
    }
}
