/**
 * 常量定义
 */

// 错误类型
export const ErrorTypes = {
  ENGINE_NOT_FOUND: 'ENGINE_NOT_FOUND',
  INVALID_INPUT: 'INVALID_INPUT',
  PARSE_ERROR: 'PARSE_ERROR',
  DOM_ERROR: 'DOM_ERROR'
}

// 默认配置
export const DefaultConfig = {
  // 默认引擎
  defaultEngine: 'htmldiff',
  // 字段标签映射
  fieldLabels: {
    title: '标题',
    subtitle: '副标题',
    digest: '摘要',
    task: '关联任务',
    siteName: '预投站点',
    channelName: '预投栏目',
    content: '正文内容',
    author: '作者',
    source: '来源单位',
    cmsFileList: '媒体资源'
  },
  // 差异样式
  diffStyles: {
    add: {
      color: '#1878E8',
      background: '#E8F4FF'
    },
    del: {
      color: '#D32F2F',
      background: '#FFEBEE',
      textDecoration: 'line-through'
    }
  },
  // 字段分组优先级
  groupPriority: {
    text: 1,
    html: 2,
    media: 3,
    custom: 4
  }
}

// 媒体类型
export const MediaTypes = {
  IMAGE: 'image',
  VIDEO: 'video',
  DOCUMENT: 'document'
}

// 变更类型
export const ChangeTypes = {
  ADD: 'add',
  DEL: 'del',
  MODIFY: 'modify',
  SAME: 'same'
}