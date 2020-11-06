<?php

namespace App\Admin\Controllers;

use App\Models\Character_assessment;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class CharacterController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'Character_assessment';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Character_assessment());

        $grid->column('id', __('Id'));
        $grid->column('uername', __('用户姓名'));
        $grid->column('tiger', __('Tiger'));
        $grid->column('peacock', __('Peacock'));
        $grid->column('koala', __('Koala'));
        $grid->column('owl', __('Owl'));
        $grid->column('chameleon', __('Chameleon'));
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
        $show = new Show(Character_assessment::findOrFail($id));

        $show->field('id', __('Id'));
        $show->field('uername', __('用户姓名'));
        $show->field('tiger', __('Tiger'));
        $show->field('peacock', __('Peacock'));
        $show->field('koala', __('Koala'));
        $show->field('owl', __('Owl'));
        $show->field('chameleon', __('Chameleon'));
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
        $form = new Form(new Character_assessment());

        $form->text('uername', __('用户姓名'))->default('退伍军人');
        $form->number('tiger', __('Tiger'));
        $form->number('peacock', __('Peacock'));
        $form->number('koala', __('Koala'));
        $form->number('owl', __('Owl'));
        $form->number('chameleon', __('Chameleon'));

        return $form;
    }
}
