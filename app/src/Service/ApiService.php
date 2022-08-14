<?php
namespace App\Service;

class ApiService {
    private $baseUrl;
    private $client;


    public function __construct()
    {
        $this->client = new \GuzzleHttp\Client(['base_uri' => 'http://sports-theme-docker-wordpress-1']);
    }

    public function makeGetRequest($url)
    {
        $response = $this->client->request('GET', $url);

        return json_decode($response->getBody(), true);

    }


    public function makePostRequest($url, $data)
    {
        $response = $this->client->request('POST', $url, $data);

        return json_decode($response->getBody());

    }
}