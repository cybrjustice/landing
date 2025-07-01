window.A = window.A || {};

// Debug log before setting config
console.log('[Config] Starting config load...');

A.config = {
    openRouterKey: 'cdfb70036d9f52c63ee2ea5067d2587610ff25f8df20779b5c2d95ba8e110ca8',
    debug: true,
    name: 'a-code',
    version: '1.0.0'
};

// Debug log after setting config
console.log('[Config] A.config set:', {
    hasKey: !!A.config?.openRouterKey,
    keyLength: A.config?.openRouterKey?.length,
    allKeys: Object.keys(A.config)
});
