<?php
include '../vendor/autoload.php';

use Api\Controller\Controller;
use PHPUnit\Framework\TestCase;

class ControllerTest extends TestCase
{
    public $request;
    public function __construct(?string $name = null, array $data = [], $dataName = '')
    {
        $this->request = Laminas\Diactoros\ServerRequestFactory::fromGlobals(
        $_SERVER, $_GET, $_POST, $_COOKIE, $_FILES);
    }



    public function testGetActionsXWingRoute(){
        $act(new Api\Controller\Controller())->generateXwingActions();
        return
    }
}
