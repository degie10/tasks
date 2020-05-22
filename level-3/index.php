<?php declare(strict_types = 1);

include_once 'vendor/autoload.php';

$content = [
    'box' => [
        'title' => 'Lorem Ipsum',
        'text' => 'Lorem ipsum dolor sit amet, consectetur adipis scing elit. Pellentesque ac nisi felis. Suspendisse ut finibus augue.',
        'buttonText' => 'Button',
        'images' => array_map(function ($src) {
            list($width) = getimagesize($src);
            return [
                'url' => $src,
                'width' => $width,
            ];
        }, glob("assets/images/*.jpg"))
    ],

    'modal' => [
        'title' => 'Lorem Ipsum',
        'text' => 'Lorem ipsum dolor sit amet, consectetur adipis scing elit. Pellentesque ac nisi felis. Suspendisse ut finibus augue.',
        'buttonText' => 'Close',
    ],
];

$loader = new \Twig\Loader\FilesystemLoader('./views');
$twig = new \Twig\Environment($loader);

echo $twig->render('pages/index.html', $content);