import {DefaultTheme} from "vitepress";

export const sidebar:DefaultTheme.Config['sidebar'] = {
    '/frontend/js/':[
        {
            text: 'js介绍',
            link: '/frontend/js/introduce'
        }
    ],
    '/code/':[
        {
           text:'C++',
           items:[
               {
                   text: '简介',
                   link: '/code/cpp/introduce'
               },
               {
                   text: '指针',
                   link: '/code/cpp/pointer'
               }
           ]
        },
        {
            text:'python',
            items:[
                {
                    text: 'python介绍',
                    link: '/code/python/introduce'
                }
            ]
        }
    ]
}
