module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	plugins: ['vue'],
	extends: [
		'plugin:vue/essential',
		// 'eslint:recommended',
		// 'plugin:prettier/recommended',
	],
	parserOptions: {
		parser: '@babel/eslint-parser',
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		eqeqeq: 0, // 使用双等只报警告
		'vue/multi-word-component-names': 0, // 关闭组件名只能通过多个单词拼接
		'vue/no-reserved-component-names': 0, // 不允许组件定义使用保留名称
		'comma-dangle': 0, // 禁止使用拖尾逗号
		quotes: 0, // 使用单引号
		'no-tabs': 0, // 不能使用tabs换行
		'no-control-regex': 0, // 禁止在正则表达式中出现控制字符
		'no-mixed-spaces-and-tabs': 0, // 不允许使用混合空格和制表符进行缩进
		'space-before-functon-paren': 0, // 方法前加空格
		'keyword-spacing': 0, // 关键字空格一致
		'no-useless-escape': 0, // 转义符号
	},
}
