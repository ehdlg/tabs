const tabContainer = document.querySelector('.tab-content');
const articles = document.querySelectorAll('article');
const tabButtons = document.querySelectorAll('button');
let isChanging = false;

const handleTabClick = (event) => {
  if (isChanging === true) return;

  isChanging = true;

  const targetTab = event.target.parentElement;
  const activeTab = document.querySelector('.selected-tab');

  if (targetTab === activeTab) return;

  const targetArticleId = event.target.getAttribute('aria-controls');

  articles.forEach((article) => {
    const isTargetArticle = targetArticleId === article.getAttribute('id');

    if (isTargetArticle) {
      const activeArticle = document.querySelector('.selected-article');

      tabContainer.classList.toggle('faded');

      activeTab.classList.remove('selected-tab');
      targetTab.classList.add('selected-tab');

      setTimeout(() => {
        article.classList.add('selected-article');
        activeArticle.classList.remove('selected-article');
        tabContainer.classList.toggle('faded');

        isChanging = false;
      }, 500);
    }
  });
};

tabButtons.forEach((button) => {
  button.addEventListener('click', handleTabClick);
});
