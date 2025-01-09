<?php
// GitHub Webhook Secret.
// GitHub项目 Settings/Webhooks 中的 Secret
$secret = "Eddie-docs";

// Path to your respostory on your server.
// e.g. "/var/www/respostory"
// 项目地址
$path = "/www/wwwroot/docs.hub-sky.com/docs";

$log = "/www/wwwroot/docs.hub-sky.com/docs/public/a.txt";
file_put_contents($log, $_SERVER['HTTP_X_HUB_SIGNATURE'], FILE_APPEND);
file_put_contents($log, file_get_contents("php://input"), FILE_APPEND);
// Headers deliveried from GitHub
try {
    $signature = $_SERVER['HTTP_X_HUB_SIGNATURE'];

    if ($signature) {
        $hash = "sha1=" . hash_hmac('sha1', file_get_contents("php://input"), $secret);
        if (strcmp($signature, $hash) == 0) {
            file_put_contents($log, "执行指令", FILE_APPEND);
            // echo shell_exec("cd {$path} && /usr/bin/git reset --hard origin/master && /usr/bin/git clean -f && /usr/bin/git pull 2>&1");
            `cd {$path} && /usr/bin/git reset --hard origin/master && /usr/bin/git clean -f && /usr/bin/git pull 2>&1`;
            exit();
        }
    }
} catch (\Throwable $th) {
    file_put_contents($log, $th->getMessage(), FILE_APPEND);
}

http_response_code(404);
