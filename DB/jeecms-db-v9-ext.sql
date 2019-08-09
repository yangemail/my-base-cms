#
# Source for table jc_channel_other
#
DROP TABLE IF EXISTS `jc_channel_other`;

CREATE TABLE `jc_channel_other` (
  `channel_id` int(11) NOT NULL,
  `channel_name` varchar(100) NOT NULL COMMENT '名称',
  `final_step` tinyint(4) DEFAULT '2' COMMENT '终审级别',
  `after_check` tinyint(4) DEFAULT NULL COMMENT '审核后(1:不能修改删除;2:修改后退回;3:修改后不变)',
  `is_static_channel` char(1) NOT NULL DEFAULT '0' COMMENT '是否栏目静态化',
  `is_static_content` char(1) NOT NULL DEFAULT '0' COMMENT '是否内容静态化',
  `is_access_by_dir` char(1) NOT NULL DEFAULT '1' COMMENT '是否使用目录访问',
  `is_list_child` char(1) NOT NULL DEFAULT '0' COMMENT '是否使用子栏目列表',
  `page_size` int(11) NOT NULL DEFAULT '20' COMMENT '每页多少条记录',
  `channel_rule` varchar(150) DEFAULT NULL COMMENT '栏目页生成规则',
  `content_rule` varchar(150) DEFAULT NULL COMMENT '内容页生成规则',
  `link` varchar(255) DEFAULT NULL COMMENT '外部链接',
  `tpl_channel` varchar(100) DEFAULT NULL COMMENT '栏目页模板',
  `tpl_content` varchar(100) DEFAULT NULL COMMENT '内容页模板',
  `title_img` varchar(100) DEFAULT NULL COMMENT '缩略图',
  `content_img` varchar(100) DEFAULT NULL COMMENT '内容图',
  `has_title_img` tinyint(1) NOT NULL DEFAULT '0' COMMENT '内容是否有缩略图',
  `has_content_img` tinyint(1) NOT NULL DEFAULT '0' COMMENT '内容是否有内容图',
  `title_img_width` int(11) NOT NULL DEFAULT '139' COMMENT '内容标题图宽度',
  `title_img_height` int(11) NOT NULL DEFAULT '139' COMMENT '内容标题图高度',
  `content_img_width` int(11) NOT NULL DEFAULT '310' COMMENT '内容内容图宽度',
  `content_img_height` int(11) NOT NULL DEFAULT '310' COMMENT '内容内容图高度',
  `comment_control` int(11) NOT NULL DEFAULT '0' COMMENT '评论(0:匿名;1:会员一次;2:关闭,3会员多次)',
  `allow_updown` tinyint(1) NOT NULL DEFAULT '1' COMMENT '顶踩(true:开放;false:关闭)',
  `is_blank` tinyint(1) NOT NULL DEFAULT '1' COMMENT '是否新窗口打开',
  `title` varchar(255) DEFAULT NULL COMMENT 'TITLE',
  `keywords` varchar(255) DEFAULT NULL COMMENT 'KEYWORDS',
  `description` varchar(255) DEFAULT NULL COMMENT 'DESCRIPTION',
  `allow_share` tinyint(1) NOT NULL DEFAULT '0' COMMENT '分享(true:开放;false:关闭)',
  `allow_score` tinyint(1) NOT NULL DEFAULT '0' COMMENT '评分(true:开放;false:关闭)',
  `tpl_mobile_channel` varchar(100) DEFAULT NULL COMMENT '手机栏目页模板',
  PRIMARY KEY (`channel_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='CMS栏目内容表';

#
# Dumping data for table jc_channel_other
#

INSERT INTO `jc_channel_other` (`channel_id`,`channel_name`,`final_step`,`after_check`,`is_static_channel`,`is_static_content`,`is_access_by_dir`,`is_list_child`,`page_size`,`channel_rule`,`content_rule`,`link`,`tpl_channel`,`tpl_content`,`title_img`,`content_img`,`has_title_img`,`has_content_img`,`title_img_width`,`title_img_height`,`content_img_width`,`content_img_height`,`comment_control`,`allow_updown`,`is_blank`,`title`,`keywords`,`description`,`allow_share`,`allow_score`,`tpl_mobile_channel`) VALUES (75,'新闻',NULL,NULL,'0','0','0','0',10,NULL,NULL,NULL,'/WEB-INF/t/cms/www/default/channel/news.html',NULL,NULL,NULL,0,0,510,288,310,310,0,1,0,NULL,NULL,NULL,1,1,'/WEB-INF/t/cms/www/mobile/channel/news.html');
INSERT INTO `jc_channel_other` (`channel_id`,`channel_name`,`final_step`,`after_check`,`is_static_channel`,`is_static_content`,`is_access_by_dir`,`is_list_child`,`page_size`,`channel_rule`,`content_rule`,`link`,`tpl_channel`,`tpl_content`,`title_img`,`content_img`,`has_title_img`,`has_content_img`,`title_img_width`,`title_img_height`,`content_img_width`,`content_img_height`,`comment_control`,`allow_updown`,`is_blank`,`title`,`keywords`,`description`,`allow_share`,`allow_score`,`tpl_mobile_channel`) VALUES (76,'图库',NULL,NULL,'0','0','0','0',10,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0,510,288,310,310,0,1,0,NULL,NULL,NULL,0,0,'');
INSERT INTO `jc_channel_other` (`channel_id`,`channel_name`,`final_step`,`after_check`,`is_static_channel`,`is_static_content`,`is_access_by_dir`,`is_list_child`,`page_size`,`channel_rule`,`content_rule`,`link`,`tpl_channel`,`tpl_content`,`title_img`,`content_img`,`has_title_img`,`has_content_img`,`title_img_width`,`title_img_height`,`content_img_width`,`content_img_height`,`comment_control`,`allow_updown`,`is_blank`,`title`,`keywords`,`description`,`allow_share`,`allow_score`,`tpl_mobile_channel`) VALUES (77,'视频',NULL,NULL,'0','0','0','0',10,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,0,510,288,310,310,0,1,0,NULL,NULL,NULL,0,0,'');
INSERT INTO `jc_channel_other` (`channel_id`,`channel_name`,`final_step`,`after_check`,`is_static_channel`,`is_static_content`,`is_access_by_dir`,`is_list_child`,`page_size`,`channel_rule`,`content_rule`,`link`,`tpl_channel`,`tpl_content`,`title_img`,`content_img`,`has_title_img`,`has_content_img`,`title_img_width`,`title_img_height`,`content_img_width`,`content_img_height`,`comment_control`,`allow_updown`,`is_blank`,`title`,`keywords`,`description`,`allow_share`,`allow_score`,`tpl_mobile_channel`) VALUES (78,'下载',NULL,NULL,'0','0','0','0',10,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0,139,139,310,310,0,1,0,NULL,NULL,NULL,0,0,'');
INSERT INTO `jc_channel_other` (`channel_id`,`channel_name`,`final_step`,`after_check`,`is_static_channel`,`is_static_content`,`is_access_by_dir`,`is_list_child`,`page_size`,`channel_rule`,`content_rule`,`link`,`tpl_channel`,`tpl_content`,`title_img`,`content_img`,`has_title_img`,`has_content_img`,`title_img_width`,`title_img_height`,`content_img_width`,`content_img_height`,`comment_control`,`allow_updown`,`is_blank`,`title`,`keywords`,`description`,`allow_share`,`allow_score`,`tpl_mobile_channel`) VALUES (79,'招聘',NULL,NULL,'0','0','0','0',10,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0,139,139,310,310,0,1,0,NULL,NULL,NULL,0,0,'');
INSERT INTO `jc_channel_other` (`channel_id`,`channel_name`,`final_step`,`after_check`,`is_static_channel`,`is_static_content`,`is_access_by_dir`,`is_list_child`,`page_size`,`channel_rule`,`content_rule`,`link`,`tpl_channel`,`tpl_content`,`title_img`,`content_img`,`has_title_img`,`has_content_img`,`title_img_width`,`title_img_height`,`content_img_width`,`content_img_height`,`comment_control`,`allow_updown`,`is_blank`,`title`,`keywords`,`description`,`allow_share`,`allow_score`,`tpl_mobile_channel`) VALUES (80,'网络调查',NULL,NULL,'0','0','0','0',10,NULL,NULL,NULL,'/WEB-INF/t/cms/www/default/alone/alone_survey.html',NULL,NULL,NULL,0,0,139,139,310,310,0,1,0,NULL,NULL,NULL,0,0,'/WEB-INF/t/cms/www/mobile/alone/alone_survey.html.html');
INSERT INTO `jc_channel_other` (`channel_id`,`channel_name`,`final_step`,`after_check`,`is_static_channel`,`is_static_content`,`is_access_by_dir`,`is_list_child`,`page_size`,`channel_rule`,`content_rule`,`link`,`tpl_channel`,`tpl_content`,`title_img`,`content_img`,`has_title_img`,`has_content_img`,`title_img_width`,`title_img_height`,`content_img_width`,`content_img_height`,`comment_control`,`allow_updown`,`is_blank`,`title`,`keywords`,`description`,`allow_share`,`allow_score`,`tpl_mobile_channel`) VALUES (82,'留言板',NULL,NULL,'0','0','0','0',10,NULL,NULL,'/guestbook.jspx',NULL,NULL,NULL,NULL,0,0,139,139,310,310,0,1,0,NULL,NULL,NULL,0,0,'');
INSERT INTO `jc_channel_other` (`channel_id`,`channel_name`,`final_step`,`after_check`,`is_static_channel`,`is_static_content`,`is_access_by_dir`,`is_list_child`,`page_size`,`channel_rule`,`content_rule`,`link`,`tpl_channel`,`tpl_content`,`title_img`,`content_img`,`has_title_img`,`has_content_img`,`title_img_width`,`title_img_height`,`content_img_width`,`content_img_height`,`comment_control`,`allow_updown`,`is_blank`,`title`,`keywords`,`description`,`allow_share`,`allow_score`,`tpl_mobile_channel`) VALUES (90,'系统软件',NULL,NULL,'0','0','0','0',10,NULL,NULL,NULL,'/WEB-INF/t/cms/www/default/channel/download_child.html',NULL,NULL,NULL,1,1,139,139,310,310,0,1,0,NULL,NULL,NULL,0,0,'');
INSERT INTO `jc_channel_other` (`channel_id`,`channel_name`,`final_step`,`after_check`,`is_static_channel`,`is_static_content`,`is_access_by_dir`,`is_list_child`,`page_size`,`channel_rule`,`content_rule`,`link`,`tpl_channel`,`tpl_content`,`title_img`,`content_img`,`has_title_img`,`has_content_img`,`title_img_width`,`title_img_height`,`content_img_width`,`content_img_height`,`comment_control`,`allow_updown`,`is_blank`,`title`,`keywords`,`description`,`allow_share`,`allow_score`,`tpl_mobile_channel`) VALUES (91,'媒体助手',NULL,NULL,'0','0','0','0',10,NULL,NULL,NULL,'/WEB-INF/t/cms/www/default/channel/download_child.html',NULL,NULL,NULL,1,1,139,139,310,310,0,1,0,NULL,NULL,NULL,0,0,'');
INSERT INTO `jc_channel_other` (`channel_id`,`channel_name`,`final_step`,`after_check`,`is_static_channel`,`is_static_content`,`is_access_by_dir`,`is_list_child`,`page_size`,`channel_rule`,`content_rule`,`link`,`tpl_channel`,`tpl_content`,`title_img`,`content_img`,`has_title_img`,`has_content_img`,`title_img_width`,`title_img_height`,`content_img_width`,`content_img_height`,`comment_control`,`allow_updown`,`is_blank`,`title`,`keywords`,`description`,`allow_share`,`allow_score`,`tpl_mobile_channel`) VALUES (92,'精品推荐',NULL,NULL,'0','0','0','0',10,NULL,NULL,NULL,'/WEB-INF/t/cms/www/default/channel/download_recommend.html',NULL,NULL,NULL,0,0,139,139,310,310,0,1,0,NULL,NULL,NULL,0,0,'');
INSERT INTO `jc_channel_other` (`channel_id`,`channel_name`,`final_step`,`after_check`,`is_static_channel`,`is_static_content`,`is_access_by_dir`,`is_list_child`,`page_size`,`channel_rule`,`content_rule`,`link`,`tpl_channel`,`tpl_content`,`title_img`,`content_img`,`has_title_img`,`has_content_img`,`title_img_width`,`title_img_height`,`content_img_width`,`content_img_height`,`comment_control`,`allow_updown`,`is_blank`,`title`,`keywords`,`description`,`allow_share`,`allow_score`,`tpl_mobile_channel`) VALUES (93,'游戏娱乐',NULL,NULL,'0','0','0','0',10,NULL,NULL,NULL,'/WEB-INF/t/cms/www/default/channel/download_child.html',NULL,NULL,NULL,1,1,139,139,310,310,0,1,0,NULL,NULL,NULL,0,0,'');

#
#  Foreign keys for table jc_channel_other
#

ALTER TABLE `jc_channel_other`
ADD CONSTRAINT `fk_jc_other_channel` FOREIGN KEY (`channel_id`) REFERENCES `jc_channel` (`channel_id`);