module.exports = {
    "base": "/home/",
    "title": "零号梦境",
    "description": "正在向主梦境跳转··········",
    "dest": "dist",
    "head": [
        [
            "link",
            {
                "rel": "icon",
                "href": "https://pan.zealsay.com/blog/favicon.ico"
            }
        ],
        [
            "meta",
            {
                "name": "viewport",
                "content": "width=device-width,initial-scale=1,user-scalable=no"
            }
        ],
        ['script', {}, `
          var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?b0aae218897fa9d8a9f76e9a77e0b3c6";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
          })();
        `] //百度统计
    ],
    "locales": {
        "/": {
            "lang": 'zh-CN'
        }
    },
    // "theme": "reco",
    "themeConfig": {
        noFoundPageByTencent: false,
        "nav": [{
                "text": "主页",
                "link": "/",
                "icon": "reco-home"
            },
            {
                "text": "世界线变动率探测仪",
                "link": "/timeline/",
                "icon": "reco-date"
            },
            {
                "text": "技术",
                "icon": "reco-message",
                "items": [{
                    "text": "前端",
                    "link": "/techs/前端/"
                }, {
                    "text": "后端",
                    "link": "/techs/后端/"
                }, {
                    "text": "其他",
                    "link": "/techs/其他/"
                }]
            },
            {
                "text": "关于",
                "link": "/about/",
                "icon": "reco-account"
            }
        ],
        "type": "blog",
        "sidebar": false,
        "blogConfig": {
            "category": {
                "location": 2,
                "text": "分类"
            },
            "tag": {
                "location": 3,
                "text": "标签"
            }
        },
        /* "friendLink": [{
                "title": "作者博客",
                "desc": "zealsay说你想说",
                "logo": "https://pan.zealsay.com/avatar/20200606105310570000000.jpg",
                "link": "https://blog.zealsay.com"
            },
            {
                "title": "另一个博客",
                "desc": "vuepress_blog",
                "logo": "https://pan.zealsay.com/blog/logo.png",
                "link": "https://www.zealsay.com"
            },
            {
                "title": "午后南杂",
                "desc": "Enjoy when you can, and endure when you must.",
                "logo": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
                "link": "https://www.recoluan.com"
            },
            {
                "title": "zealsay开发指南",
                "desc": "zealsay轻应用脚手架开发指南",
                "logo": "https://pic.zealsay.com/20190909225214850000000.jpg",
                "link": "https://docs.zealsay.com"
            }
        ], */
        "valineConfig": {
            "appId": "PmMQrXH6ETeoMpO2ahvbduCL-MdYXbMMI", // your appId
            "appKey": "T0YknSmOyDxzqPKoswbALRi2", // your appKey
            "avatar": "/avatar.jpg", //
            "enableQQ": true, //启用昵称框自动获取QQ昵称和QQ头像
            "requiredFields": ['nick', 'mail'], //设置必填项,
            "placeholder": "请留下你的评论以干涉此梦境的世界线",
            "emojiCDN": '//i0.hdslb.com/bfs/emote/',
            "emojiMaps": {
                "tv_doge": "6ea59c827c414b4a2955fe79e0f6fd3dcd515e24.png",
                "tv_亲亲": "a8111ad55953ef5e3be3327ef94eb4a39d535d06.png",
                "tv_偷笑": "bb690d4107620f1c15cff29509db529a73aee261.png",
                "tv_再见": "180129b8ea851044ce71caf55cc8ce44bd4a4fc8.png",
                "tv_冷漠": "b9cbc755c2b3ee43be07ca13de84e5b699a3f101.png",
                "tv_发怒": "34ba3cd204d5b05fec70ce08fa9fa0dd612409ff.png",
                "tv_发财": "34db290afd2963723c6eb3c4560667db7253a21a.png",
                "tv_可爱": "9e55fd9b500ac4b96613539f1ce2f9499e314ed9.png",
                "tv_吐血": "09dd16a7aa59b77baa1155d47484409624470c77.png",
                "tv_呆": "fe1179ebaa191569b0d31cecafe7a2cd1c951c9d.png",
                "tv_呕吐": "9f996894a39e282ccf5e66856af49483f81870f3.png",
                "tv_困": "241ee304e44c0af029adceb294399391e4737ef2.png",
                "tv_坏笑": "1f0b87f731a671079842116e0991c91c2c88645a.png",
                "tv_大佬": "093c1e2c490161aca397afc45573c877cdead616.png",
                "tv_大哭": "23269aeb35f99daee28dda129676f6e9ea87934f.png",
                "tv_委屈": "d04dba7b5465779e9755d2ab6f0a897b9b33bb77.png",
                "tv_害羞": "a37683fb5642fa3ddfc7f4e5525fd13e42a2bdb1.png",
                "tv_尴尬": "7cfa62dafc59798a3d3fb262d421eeeff166cfa4.png",
                "tv_微笑": "70dc5c7b56f93eb61bddba11e28fb1d18fddcd4c.png",
                "tv_思考": "90cf159733e558137ed20aa04d09964436f618a1.png",
                "tv_惊吓": "0d15c7e2ee58e935adc6a7193ee042388adc22af.png",
                "tv_打脸": "56ab10b624063e966bfcb76ea5dc4794d87dfd47.png",
                "tv_抓狂": "fe31c08edad661d63762b04e17b8d5ae3c71a757.png",
                "tv_抠鼻": "c666f55e88d471e51bbd9fab9bb308110824a6eb.png",
                "tv_斜眼笑": "911f987aa8bc1bee12d52aafe62bc41ef4474e6c.png",
                "tv_无奈": "ea8ed89ee9878f2fece2dda0ea8a5dbfe21b5751.png",
                "tv_晕": "5443c22b4d07fb1907ccc610c8e6db254f2461b7.png",
                "tv_流汗": "cead1c351ab8d79e9f369605beb90148db0fbed3.png",
                "tv_流泪": "7e71cde7858f0cd50d74b0264aa26db612a8a167.png",
                "tv_流鼻血": "c32d39db2737f89b904ca32700d140a9241b0767.png",
                "tv_点赞": "f85c354995bd99e28fc76c869bfe42ba6438eff4.png",
                "tv_生气": "26702dcafdab5e8225b43ffd23c94ac1ff932654.png",
                "tv_生病": "8b0ec90e6b86771092a498c54f09fc94621c1900.png",
                "tv_疑问": "0793d949b18d7be716078349c202c15ff166f314.png",
                "tv_白眼": "c1d59f439e379ee50eef488bcb5e5378e5044ea4.png",
                "tv_皱眉": "72ccad6679fea0d14cce648b4d818e09b8ffea2d.png",
                "tv_目瞪口呆": "0b8cb81a68de5d5365212c99375e7ace3e7891b7.png",
                "tv_睡着": "8b196675b53af58264f383c50ad0945048290b33.png",
                "tv_笑哭": "1abc628f6d4f4caf9d0e7800878f4697abbc8273.png",
                "tv_腼腆": "89712c0d4af73e67f89e35cbc518420380a7f6f4.png",
                "tv_色": "61822c7e9aae5da76475e7892534545336b23a6f.png",
                "tv_调侃": "4bc022533ef31544ca0d72c12c808cf4a1cce3e3.png",
                "tv_调皮": "b9c41de8e82dd7a8515ae5e3cb63e898bf245186.png",
                "tv_鄙视": "6e72339f346a692a495b123174b49e4e8e781303.png",
                "tv_闭嘴": "c9e990da7f6e93975e25fd8b70e2e290aa4086ef.png",
                "tv_难过": "87f46748d3f142ebc6586ff58860d0e2fc8263ba.png",
                "tv_馋": "fc7e829b845c43c623c8b490ee3602b7f0e76a31.png",
                "tv_鬼脸": "0ffbbddf8a94d124ca2f54b360bbc04feb6bbfea.png",
                "tv_黑人问号": "45821a01f51bc867da9edbaa2e070410819a95b2.png",
                "tv_鼓掌": "1d21793f96ef4e6f48b23e53e3b9e42da833a0f6.png",
            },
        },
        "logo": "/logo.png",
        // "huawei": true, //首页出现华为文案
        "search": true,
        "searchMaxSuggestions": 10,
        "lastUpdated": "Last Updated",
        "author": "KurosakiRei",
        "authorAvatar": "/avatar.jpg",
        /* "record": "你的备案号 ", //icp备案 */
        "startYear": "2021",
        "info": "一位平平无奇的业余程序员",
        "socials": {
            "github": "https://username.github.io/home", //github //简书
            "zhihu": "https://www.zhihu.com/people/kurosakirei", //知乎
            "csdn": false, //CSDN
            "wechat": "Kurosaki-Rei", //微信
            "qq": "你的QQ" //QQ
        },
        "mottos": [{
                "zh": "愿你保持初心和善良,笑里尽是温暖与坦荡。",
                "en": "May you keep your original heart and kindness, and smile with warmth and magnanimity."
            },
            {
                "zh": "年轻就是无限的可能。",
                "en": "Youth means limitless possibilities."
            },
            {
                "zh": "真正的梦就是现实的彼岸。",
                "en": "Real dream is the other shore of reality."
            },
            {
                "zh": "不为模糊不清的未来担忧，只为清清楚楚的现在努力。",
                "en": "Don't worry about the vague future, just strive for the clear present."
            },
            {
                "zh": "与其装腔作势企图影响别人，不如咬牙切齿狠命修理自己。",
                "en": "Rather than pretending to influence others, it's better to grind your teeth and repair yourself."
            }, {
                "zh": "上天是公平的，只要努力就会有收获，否则就是你不够努力。",
                "en": "God is fair, as long as effort will include results, otherwise is you hard enough."
            },
            {
                "zh": "人生没有后悔，我们只能尽力去不让自己后悔。",
                "en": "Life without regret, we can only do our best to not to regret."
            }
        ],
        "covers": [
            'https://pan.zealsay.com/zealsay/cover/7.jpg',
            'https://pan.zealsay.com/zealsay/cover/1.jpg',
            'https://pan.zealsay.com/zealsay/cover/2.jpg',
            'https://pan.zealsay.com/zealsay/cover/3.jpg',
            'https://pan.zealsay.com/zealsay/cover/4.jpg',
            'https://pan.zealsay.com/zealsay/cover/5.jpg',
            'https://pan.zealsay.com/zealsay/cover/6.jpg'
        ],
        "codeTheme": "tomorrow"
    },
    "markdown": {
        "lineNumbers": false
    },
    plugins: [
            [
                'meting', {
                    /* auto: "https://y.qq.com/n/ryqq/playlist/8140023932", */ //你的歌单的链接，网页歌单链接
                    meting: {
                        server: "tencent", //歌单的平台、我这里是QQ音乐的平台
                        type: "playlist",
                        mid: "7850620254", //链接后面的id
                    }, // 不配置该项的话不会出现全局播放器
                    aplayer: {
                        volume: 0.3,
                        lrcType: 0,
                        autoplay: true,
                        theme: "#0080FF",
                        order: "random"
                    }
                }
            ],
            [
                'cursor-effects',
                {
                    size: 2, // size of the particle, default: 2
                    shape: ['drop'], // shape of the particle, default: 'star'
                    zIndex: 999999999, // z-index property of the canvas, default: 999999999
                },
            ],
            [
                "permalink-pinyin",
                {
                    lowercase: true, // Converted into lowercase, default: true
                    separator: "-", // Separator of the slug, default: '-'
                },
            ],
            [
                "dynamic-title",
                {
                    showIcon: "/favicon.ico",
                    showText: '世界线收束!El Psy Congroo!!!!!!',
                    hideIcon: '/failure.ico',
                    hideText: '世界线变动中!!!!!!',
                    recoverTime: 2000
                }
            ],
            [
                'vuepress-plugin-helper-live2d', {
                    log: false,
                    live2d: {
                        // 是否启用(关闭请设置为false)(default: true)
                        enable: true,
                        // 模型名称(default: hibiki)>>>取值请参考：
                        // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
                        model: 'hijiki',
                        display: {
                            position: "right", // 显示位置：left/right(default: 'right')
                            width: 135, // 模型的长度(default: 135)
                            height: 300, // 模型的高度(default: 300)
                            hOffset: 65, //  水平偏移(default: 65)
                            vOffset: 0, //  垂直偏移(default: 0)
                        },
                        mobile: {
                            show: false // 是否在移动设备上显示(default: false)
                        },
                        react: {
                            opacity: 0.8 // 模型透明度(default: 0.8)
                        }
                    }
                }
            ],
            [
                [
                    '@vuepress/last-updated',
                    {
                        transformer: (timestamp, lang) => {
                            // Don't forget to install moment yourself
                            const moment = require('moment')
                            moment.locale(lang)
                            return moment(timestamp).fromNow()
                        }
                    }
                ]
            ],
        ]
        // configureWebpack: (config, isServer) => {
        //   if (!isServer) {
        //     // 修改客户端的 webpack 配置
        //     config.output.publicPath = config.mode === 'production'
        //       ? 'https://pan.zealsay.com/blog/' // sample/essays 打包的默认路径为 ‘_nuxt’ 或者可以指定cdn 域名
        //       : '/';
        //     config.output.filename = "assets/js/[name].js";
        //   }
        // }
}