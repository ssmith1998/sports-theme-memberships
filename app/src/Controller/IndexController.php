<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Service\ApiService;

class IndexController extends BaseController
{
    #[Route('/memberships', name: 'app_index')]
    public function index(ApiService $api): Response
    {

        $response = $api->makeGetRequest('/jod?category=animal');
        dd($response);
        return $this->render('index/index.html.twig', [
            'controller_name' => 'IndexController',
        ]);
    }
}
