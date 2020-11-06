<?php

namespace App\Admin\Controllers;

use App\Models\career_interest_test;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class CareerIntertstController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'Career_interest_test';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new career_interest_test());

        $grid->column('id', __('Id'));
        $grid->column('name', __('姓名'));
        $grid->column('R', __('R'));
        $grid->column('A', __('A'));
        $grid->column('I', __('I'));
        $grid->column('S', __('S'));
        $grid->column('E', __('E'));
        $grid->column('C', __('C'));
        $grid->column('created_at', __('创建时间'));

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
        $show = new Show(career_interest_test::findOrFail($id));

        $show->field('id', __('Id'));
        $show->field('name', __('姓名'));
        $show->field('R', __('R'));
        $show->field('A', __('A'));
        $show->field('I', __('I'));
        $show->field('S', __('S'));
        $show->field('E', __('E'));
        $show->field('C', __('C'));
        $show->field('created_at', __('创建时间'));

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new career_interest_test());

        $form->text('name', __('姓名'))->default('退伍军人');
        $form->number('R', __('R'));
        $form->number('A', __('A'));
        $form->number('I', __('I'));
        $form->number('S', __('S'));
        $form->number('E', __('E'));
        $form->number('C', __('C'));

        return $form;
    }
}
