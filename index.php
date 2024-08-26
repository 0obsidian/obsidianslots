<?php
if (isset($_GET["key"])) {
    $URLDATA = $_GET["key"];
    if ($URLDATA) {
        $s = '<html><head> <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" /><meta name="twitter:card" content="player" /><meta name="twitter:site" content="@flyguy155" /><meta name="twitter:title" content="Lol" /><meta name="twitter:description" content="Blank" /> /><meta name="twitter:player:width" content="320" /><meta name="twitter:player:height" content="180" /><meta name="twitter:player:stream:content_type" content="video/mp4" />';
        
        $x = '<meta property="og:image" content="https://obsidianslots.lol/uploads' . $URLDATA . '.png" /><meta name="twitter:card" content="summary_large_image">';
        echo $s . $x;
    };
};
?>
