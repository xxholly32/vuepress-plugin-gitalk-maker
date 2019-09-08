import 'gitalk/dist/gitalk.css';
import Gitalk from 'gitalk';
import './gitalk.styl';

function renderGitalk(isRender, frontmatter) {
  const gitalk = new Gitalk(
    Object.assign({}, GITALK, {
      id: frontmatter ? frontmatter.gitalkId : 'null',
    }),
  );
  isRender && gitalk.render('gitalk-container');
}

function intergrateGitalk(boo, frontmatter) {
  const commentsContainer = document.createElement('div');
  commentsContainer.id = 'gitalk-container';
  const $page = document.querySelector('.page');
  if ($page) {
    $page.appendChild(commentsContainer);
  }
  renderGitalk(boo, frontmatter);
}

export default {
  mounted() {
    try {
      const router = this.$router;
      const frontmatter = this.$frontmatter;
      setTimeout(() => {
        document && intergrateGitalk(router.path !== '/', frontmatter);
      }, 500);
    } catch (e) {
      console.error(e.message);
    }
  },
};
