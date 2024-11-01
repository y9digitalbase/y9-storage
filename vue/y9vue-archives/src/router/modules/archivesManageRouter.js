/*
 * @Author: yihong yihong@risesoft.net
 * @Date: 2024-10-09 10:05:19
 * @LastEditors: yihong yihong@risesoft.net
 * @LastEditTime: 2024-10-12 09:55:28
 * @FilePath: \vue\y9vue-archives\src\router\modules\collectRouter.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const archivesManageRouter = {
        path: '/archivesManage',
        component: () => import('@/layouts/index.vue'),
        name:'archivesManageIndex',
        redirect: '/archivesManage/library',
        meta: {
            title: '档案管理',
            icon: 'ri-archive-line',
            roles: ['user','archivesManager'],
        },
        children:[
            {
                path: '/archivesManage/library',
                component: () => import('@/views/archivesManage/index.vue'),
                name: 'library',
                meta: {
                    title: '档案管理库',
                    icon: 'ri-archive-drawer-line',
                },
            },
            {
                path: '/archivesManage/appraisal',
                component: () => import('@/views/archivesManage/index.vue'),
                name: 'appraisal',
                meta: {
                    title: '档案鉴定',
                    icon: 'ri-search-eye-line',
                },
            },
        ]
    };
export default archivesManageRouter;
