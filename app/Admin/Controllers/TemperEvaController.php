<?php

namespace App\Admin\Controllers;

use App\Models\TemperEva;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class TemperEvaController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = '用户成绩';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new TemperEva());
        $grid->column('id', __('ID'));
        $grid->column('phone', __('电话'));
        $grid->column('name', __('姓名'));
        $grid->column('A', __('A'));
        $grid->column('B', __('B'));
        $grid->column('C', __('C'));
        $grid->column('D', __('D'));
        $grid->actions(function ($actions) {
            $actions->disableEdit();
        });
        $grid->disableCreateButton();
        $grid->quickSearch('phone');
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
        $show = new Show(TemperEva::findOrFail($id));
        $show->field('id', __('ID'));
        $show->field('phone', __('电话'));
        $show->field('name', __('姓名'));
        $show->field('A', __('A'));
        $show->field('B', __('B'));
        $show->field('C', __('C'));
        $show->field('D', __('D'));

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new TemperEva());

        $form->text('phone', __('电话'));
        $form->text('name', __('姓名'));
        $form->number('A', __('A'));
        $form->number('B', __('B'));
        $form->number('C', __('C'));
        $form->number('D', __('D'));

        return $form;
    }
}
