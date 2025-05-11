export interface LanguageConfig {
  name: string;
  color: string;
  icon: string;
}

export const languages: Record<string, LanguageConfig> = {
  TypeScript: {
    name: 'TypeScript',
    color: 'bg-blue-500',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
  },
  JavaScript: {
    name: 'JavaScript',
    color: 'bg-yellow-400',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
  },
  Python: {
    name: 'Python',
    color: 'bg-blue-600',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
  },
  Java: {
    name: 'Java',
    color: 'bg-red-500',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
  },
  HTML: {
    name: 'HTML5',
    color: 'bg-orange-500',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
  },
  CSS: {
    name: 'CSS3',
    color: 'bg-blue-500',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
  },
  PHP: {
    name: 'PHP',
    color: 'bg-purple-500',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'
  },
  Ruby: {
    name: 'Ruby',
    color: 'bg-red-600',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg'
  },
  Go: {
    name: 'Go',
    color: 'bg-blue-500',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg'
  },
  Rust: {
    name: 'Rust',
    color: 'bg-orange-600',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg'
  },
  C: {
    name: 'C',
    color: 'bg-blue-700',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg'
  },
  'C++': {
    name: 'C++',
    color: 'bg-blue-600',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg'
  },
  'C#': {
    name: 'C#',
    color: 'bg-purple-600',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg'
  },
  Swift: {
    name: 'Swift',
    color: 'bg-orange-500',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg'
  },
  Kotlin: {
    name: 'Kotlin',
    color: 'bg-purple-500',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg'
  },
  Dart: {
    name: 'Dart',
    color: 'bg-blue-400',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg'
  },
  Shell: {
    name: 'Shell',
    color: 'bg-green-600',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg'
  },
  Scala: {
    name: 'Scala',
    color: 'bg-red-500',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg'
  },
  R: {
    name: 'R',
    color: 'bg-blue-600',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg'
  },
  Assembly: {
    name: 'Assembly',
    color: 'bg-gray-600',
    icon: '/icons/assembly.svg',
  },
  ShaderLab: {
    name: 'ShaderLab',
    color: 'bg-purple-600',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg'
  },
  GDScript: {
    name: 'GDScript',
    color: 'bg-green-600',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg'
  },
  'Jupyter Notebook': {
    name: 'Jupyter Notebook',
    color: 'bg-orange-500',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg',
  },
  React: {
    name: 'React',
    color: 'bg-blue-400',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
  },
  'React Native': {
    name: 'React Native',
    color: 'bg-blue-400',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
  },
  Angular: {
    name: 'Angular',
    color: 'bg-red-500',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg'
  },
  Vue: {
    name: 'Vue.js',
    color: 'bg-green-500',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'
  },
  Next: {
    name: 'Next.js',
    color: 'bg-black',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
  },
  Node: {
    name: 'Node.js',
    color: 'bg-green-600',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
  },
  Express: {
    name: 'Express',
    color: 'bg-gray-600',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
  },
  Django: {
    name: 'Django',
    color: 'bg-green-800',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg'
  },
  Flask: {
    name: 'Flask',
    color: 'bg-black',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg'
  },
  Spring: {
    name: 'Spring',
    color: 'bg-green-600',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg'
  },
  Laravel: {
    name: 'Laravel',
    color: 'bg-red-500',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg'
  },
  Rails: {
    name: 'Ruby on Rails',
    color: 'bg-red-600',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original.svg'
  },
  MySQL: {
    name: 'MySQL',
    color: 'bg-blue-600',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
  },
  PostgreSQL: {
    name: 'PostgreSQL',
    color: 'bg-blue-500',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
  },
  MongoDB: {
    name: 'MongoDB',
    color: 'bg-green-600',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
  },
  Redis: {
    name: 'Redis',
    color: 'bg-red-600',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg'
  },
  Docker: {
    name: 'Docker',
    color: 'bg-blue-500',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
  },
  Kubernetes: {
    name: 'Kubernetes',
    color: 'bg-blue-600',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg'
  },
  AWS: {
    name: 'AWS',
    color: 'bg-orange-500',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg'
  },
  Azure: {
    name: 'Azure',
    color: 'bg-blue-500',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg'
  },
  GCP: {
    name: 'Google Cloud',
    color: 'bg-blue-500',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg'
  },
  Git: {
    name: 'Git',
    color: 'bg-orange-600',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
  },
  GitHub: {
    name: 'GitHub',
    color: 'bg-gray-800',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
  },
  GitLab: {
    name: 'GitLab',
    color: 'bg-orange-500',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg'
  },
  Jenkins: {
    name: 'Jenkins',
    color: 'bg-red-500',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg'
  },
  Nginx: {
    name: 'Nginx',
    color: 'bg-green-600',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg'
  },
  SASS: {
    name: 'Sass',
    color: 'bg-pink-500',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg'
  },
  Tailwind: {
    name: 'Tailwind CSS',
    color: 'bg-blue-400',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'
  },
  Bootstrap: {
    name: 'Bootstrap',
    color: 'bg-purple-500',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'
  },
  MaterialUI: {
    name: 'Material UI',
    color: 'bg-blue-500',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg'
  }
}; 