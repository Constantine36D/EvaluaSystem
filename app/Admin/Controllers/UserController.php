<?php

namespace App\Admin\Controllers;

use App\Models\Userinfo;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class UserController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'Userinfo';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Userinfo());

        $grid->column('id', __('Id'));
        $grid->column('phone', __('电话'));
        $grid->column('name', __('姓名'));
        $grid->column('age', __('年龄'));
        $grid->column('sum', __('总分'));

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
        $show = new Show(Userinfo::findOrFail($id));

        $show->field('id', __('Id'));
        $show->field('phone', __('电话'));
        $show->field('name', __('姓名'));
        $show->field('age', __('年龄'));
        $show->field('sum', __('总分'));


        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new Userinfo());

        $form->mobile('phone', __('Phone'))->default('18888888888');
                $form->text('name', __('姓名'))->default('123');
        $form->number('age', __('年龄'))->default(20);
        $form->number('sum', __('总分'));


        return $form;
    }
}