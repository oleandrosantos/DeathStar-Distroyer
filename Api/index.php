<?php
ini_set('display_errors', 1);
include '../vendor/autoload.php';

$uri = '/DeathStar-Distroyer/Api';
$_SERVER['REQUEST_URI'] = substr($_SERVER['REQUEST_URI'], (strlen($uri)));

use Psr\Http\Message\ServerRequestInterface;

$request = Laminas\Diactoros\ServerRequestFactory::fromGlobals(
    $_SERVER,
    $_GET,
    $_POST,
    $_COOKIE,
    $_FILES
);

$responseFactory = new Laminas\Diactoros\ResponseFactory();

$strategy = new League\Route\Strategy\JsonStrategy($responseFactory);
$router   = (new League\Route\Router)->setStrategy($strategy);

// map a route
$router->map('GET', '/{qtd:number}', function (ServerRequestInterface $request, array $args): array {
    return (new Api\Controller\Controller())->generateXwingActions($args['qtd'], true);
});

$router->map('GET', '/', function (ServerRequestInterface $request, array $args): array {
    return (new Api\Controller\Controller())->generateXwingActions();
});
$response = $router->dispatch($request);

// send the response to the browser
(new Laminas\HttpHandlerRunner\Emitter\SapiEmitter)->emit($response);
