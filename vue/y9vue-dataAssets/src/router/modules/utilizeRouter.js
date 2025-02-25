/*
 * @Author: yihong yihong@risesoft.net
 * @Date: 2024-10-09 10:05:19
 * @LastEditors: yihong yihong@risesoft.net
 * @LastEditTime: 2025-01-07 10:18:26
 * @FilePath: \vue\y9vue-dataAssets\src\router\modules\collectRouter.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const utilizeRouter = {
        path: '/utilize',
        component: () => import('@/layouts/index.vue'),
        name:'utilize',
        redirect: '/utilize/fullText',
        meta: {
            title: '资产利用',
            icon: 'ri-function-line',
            roles: ['user','archivesManager'],
        },
        children:[
            {
                path: '/utilize/fullText',
                component: () => import('@/views/utilize/index.vue'),
                name: 'fullText',
                meta: {
                    title: '智能检索',
                    icon: 'ri-search-line',
                },
            },
            {
                path: '/utilize/condition',
                component: () => import('@/views/utilize/index.vue'),
                name: 'condition',
                meta: {
                    title: '接口管理',
                    icon: 'ri-file-search-line',
                },
            },
        ]
    };
export default utilizeRouter;
