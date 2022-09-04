<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Service\ApiService;

class MembershipController extends BaseController
{
    #[Route('/membership/{id}', name: 'single_membership')]
    public function index($id, ApiService $api): Response
    {
        $membership = $api->makeGetRequest("/wp-json/memberships/v1/membership/$id");
        return $this->render('membership/index.html.twig', [
            'membership' => $membership
        ]);
    }
}
