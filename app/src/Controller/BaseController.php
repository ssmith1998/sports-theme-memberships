<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Security;
class BaseController extends AbstractController
{

    private $security;
    public function __construct(Security $security)
    {
        $this->security = $security;
    }

    public function getCurrentUser(): User
    {
        return $this->security->getUser();
    }
}
