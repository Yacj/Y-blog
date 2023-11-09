import type {DefaultTheme} from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
    {
        text: '前端开发',
        items: [
            {
                text: 'javaScript基础知识',
                link: '/frontend/js/introduce'
            }
        ]
    },
    {
        text:'代码杂谈',
        items:[
            {
                text:'c++',
                link:'/code/cpp/introduce'
            },
            {
                text:'python',
                link:'/code/python/introduce',
            }
        ]
    }
]
