<?php

namespace Api;

class XWing
{
    public const ACTION = [
        ["codeSceneryXwing"=>0, "valueScenery"=> "Tie-Fighter atacando"],
        ["codeSceneryXwing"=>1, "valueScenery"=> "Canhao de Plasma atacando"],
        ["codeSceneryXwing"=>2, "valueScenery"=> "Corredor livre"],
        ["codeSceneryXwing"=>3, "valueScenery"=> "Ponto fraco a frente"],
    ];

    /**
     * @param bool $endEnabled
     * @return array
     */
    public function generateAction(bool $endEnabled = false){
        if($endEnabled){
            return self::ACTION[(rand(0,3))];
        }
        return self::ACTION[(rand(0,2))];
    }
}