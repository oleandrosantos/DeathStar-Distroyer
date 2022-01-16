<?php

namespace Api;

class XWing
{
    public const ACTION = [
        ["codigoCenarioXwing" => 0, "valorCenario" => "Tie-Fighter atacando"],
        ["codigoCenarioXwing" => 1, "valorCenario" => "Canhao de Plasma atacando"],
        ["codigoCenarioXwing" => 2, "valorCenario" => "Corredor livre"],
        ["codigoCenarioXwing" => 3, "valorCenario" => "Ponto fraco a frente"],
    ];

    /**
     * Gera um codigocenario aleatorio.
     * @param bool $endEnabled
     * @return array
     */
    public function generateAction(bool $endEnabled = false)
    {
        if ($endEnabled) {
            return self::ACTION[(rand(0, 3))];
        }
        return self::ACTION[(rand(0, 2))];
    }
}
