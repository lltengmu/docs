<?php
// GitHub Webhook Secret.
// GitHub项目 Settings/Webhooks 中的 Secret
$secret = "Eddie-docs";

// Path to your respostory on your server.
// e.g. "/var/www/respostory"
// 项目地址
$path = "/www/wwwroot/docs.hub-sky.com/docs";

$log = "/www/wwwroot/docs.hub-sky.com/docs/public/a.txt";
// Headers deliveried from GitHub
$signature = $_SERVER['HTTP_X_HUB_SIGNATURE'];

$command = "cd $path && /usr/bin/git pull";
$output = [];
$return_var = null;

if ($signature) {
    $hash = "sha1=" . hash_hmac('sha1', file_get_contents("php://input"), $secret);
    if (strcmp($signature, $hash) == 0) {
        // $output = shell_exec("cd {$path} && /usr/bin/git reset --hard origin/master && /usr/bin/git clean -f && /usr/bin/git pull 2>&1");
        exec($command, $output, $return_var);
        if ($return_var !== 0) {
            // 命令执行失败，检查 $output 数组以获取错误信息
            foreach ($output as $line) {
                file_put_contents($log, "指令执行结果:" . $line . "\n", FILE_APPEND);
            }
        } else {
            // 命令执行成功
            file_put_contents($log, "Git operations completed successfully.\n", FILE_APPEND);
        }
        exit();
    }
}

http_response_code(404);
