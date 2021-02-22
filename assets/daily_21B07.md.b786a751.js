import{l as e,f as t,A as r}from"./framework.ab59a038.js";const a='{"title":"21B07","description":"","frontmatter":{"title":"21B07","subtitle":"python hard way","category":"python","date":"2021-01-21T00:00:00.000Z"},"headers":[{"level":2,"title":"command line argument parse","slug":"command-line-argument-parse"},{"level":2,"title":"progess bar","slug":"progess-bar"},{"level":2,"title":"requirements.txt","slug":"requirements-txt"},{"level":2,"title":"tar file","slug":"tar-file"}],"relativePath":"daily/21B07.md","lastUpdated":1611304319529}',n={},i=r('<p><div class="table-of-contents"><ul><li><a href="#command-line-argument-parse">command line argument parse</a></li><li><a href="#progess-bar">progess bar</a></li><li><a href="#requirements-txt">requirements.txt</a></li><li><a href="#tar-file">tar file</a></li></ul></div></p><hr><h2 id="command-line-argument-parse"><a class="header-anchor" href="#command-line-argument-parse" aria-hidden="true">#</a> command line argument parse</h2><p>使用 [<a href="https://click.palletsprojects.com/en/7.x/" target="_blank" rel="noopener noreferrer">click</a>] 作为解析库，可以方便的实现子命令操作。整理一些使用中遇到的问题。</p><ul><li>对 argument 进行注释</li></ul><p>使用多行注释的方式 <code>&quot;&quot;&quot; xxx &quot;&quot;&quot;</code>。但是 click 默认是现在在统一行，去除掉了换行的操作。所以在有多参数的情况下显示比较乱。解决方式是：</p><div class="language-"><pre><code>@click.command()\n@click.argument(&#39;gt&#39;, type=click.Path(exists=True))\n@click.argument(&#39;prefix&#39;, type=click.Path(exists=True))\ndef execute(gt, prefix):\n    &quot;&quot;&quot;\n       \\b \n       explain the command usage\n       gt: xxxx\n       prefix: xxxxx\n    &quot;&quot;&quot;\n</code></pre></div><h2 id="progess-bar"><a class="header-anchor" href="#progess-bar" aria-hidden="true">#</a> progess bar</h2><p>使用 [<a href="https://github.com/tqdm/tqdm" target="_blank" rel="noopener noreferrer">tqdm</a>] 搭配各种场景使用，比如在 requests 中显示现在的进度时，可以有如下的方式：</p><div class="language-"><pre><code>r = requests.get(url, stream=True, allow_redirects=True)\n... # status code check \npath = pathlib.Path(filename).expanduser().resolve()\npath.parent.mkdir(parents=True, exist_ok=True)\n\ndesc = filename.ljust(22, &#39; &#39;) # 22 is the lenght bigger than filename, should change\nr.raw.read = functools.partial(r.raw.read, decode_content=True)  # Decompress if needed\nwith tqdm.tqdm.wrapattr(r.raw, &quot;read&quot;, total=file_size, desc=desc) as r_raw:\n     with path.open(&quot;wb&quot;) as f:\n            shutil.copyfileobj(r_raw, f)\n</code></pre></div><p>同时也可以在命令行中使用：</p><div class="language-"><pre><code>find . -name &#39;*.py&#39; -type f -exec cat \\{} \\; \\\n  | tqdm --unit loc --unit_scale --total 857366 &gt;&gt; /dev/null\n100%|█████████████████████████████████| 857K/857K [00:04&lt;00:00, 246Kloc/s]\n</code></pre></div><p>更多使用参考文档 [<a href="https://tqdm.github.io/docs" target="_blank" rel="noopener noreferrer">tqdm documention</a>] 。</p><h2 id="requirements-txt"><a class="header-anchor" href="#requirements-txt" aria-hidden="true">#</a> requirements.txt</h2><p>这个文件可以用于python项目初始化时安装依赖使用。可以通过两种方式获取到：</p><div class="language-"><pre><code># 获取完整的依赖环境\n$ pip3 freeze &gt; requirements.txt\n\n# 获取必要的依赖\n$ pip install pipreqs\n$ pipreqs .\n\n# 使用\n$ pip install -r requirements.txt\n</code></pre></div><h2 id="tar-file"><a class="header-anchor" href="#tar-file" aria-hidden="true">#</a> tar file</h2><p>获取 tar.gz 文件中的顶层目录的名称，使用下面简单的方式：</p><div class="language-"><pre><code>archive = tarfile.open(filepath, mode=&#39;r&#39;)\nprint os.path.commonprefix(archive.getnames())\n</code></pre></div>',19);n.render=function(r,a,n,l,s,o){return e(),t("div",null,[i])};export default n;export{a as __pageData};
