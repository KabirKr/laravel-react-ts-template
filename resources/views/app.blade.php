<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta
        http-equiv="X-UA-Compatible"
        content="IE=edge"
    >
    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title inertia>{{ config('app.name') }}</title>

    @viteReactRefresh
    @vite(['resources/client/index.tsx', "resources/client/Pages/{$page['component']}.tsx"])
    @inertiaHead
</head>

<body>
    @inertia
</body>

</html>
