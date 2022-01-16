<?php
namespace Api\Controller;

use Api\XWing;

class Controller
{
    public $xWing;
    public $actionsXWing = [];
    public function __construct()
    {
        $this->xWing = new XWing();
    }

    public function generateXwingActions(int $quantityXwingActions = 3, bool $endEnabled = false):array
    {
        for ($indice = 0; $indice < $quantityXwingActions; $indice++){
            array_push($this->actionsXWing, $this->xWing->generateAction($endEnabled));
        }

        return $this->actionsXWing;
    }

    public function tokenGenerator(){
        return md5(uniqid(rand(), true));
    }
}