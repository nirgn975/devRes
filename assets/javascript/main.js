import * as params from '@params';

/**
 * Get GitHub repos data.
 */
async function getReposData() {
  if (!params.projects.enable) {
    return;
  }

  for (repo of params.projects.repos) {
    await fetch(`https://api.github.com/repos/${params.projects.githubUsername}/${repo.url}`)
      .then(response => response.json())
      .then(data => {
        repo.value = {
          name: data.name,
          description: data.description,
          url: data.html_url,
          stars: data.stargazers_count,
          forks: data.forks,
        };
      });
  };

  return params.projects.repos;
}

document.addEventListener("DOMContentLoaded", function(event) {
  const theme = localStorage.getItem('theme');
  if (theme == 'dark') {
    $('html').attr('data-theme', 'dark');
  }

  // Get lates blog posts.
  fetch(params.blog.sitemapUrl)
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, 'text/xml'))
    .then(data => {
      const channel = data.childNodes[0].childNodes[0];

      let posts = 1;
      for (let entity of channel.childNodes.values()) {
        if (posts > params.blog.numberOfPosts) {
          break;
        }

        if (entity.nodeName == 'item') {
          posts += 1;

          // Separate the text of the post from it's banner image.
          const postText = entity.getElementsByTagName("description")[0].textContent.replace('src="/', `src="${params.blog.url}/`);
          const regex = /<div class="featured-image">\n.+\n.+<\/div>/g;
          const postImage = postText.match(regex);
          const postImageWithAlt = String(postImage).replace("img", "img alt='Blog post hero image'");
          const postDescription = postText.replace(regex, '');
          let editedPostText = postDescription.split(' ', 60).join(' ');
          if (postDescription.split(' ').length > 60) {
            editedPostText += ' ...';
          }

          $('.posts').append(`
            <div>
              <div class="uk-card uk-card-default">
                <div class="uk-card-header">
                  <div class="uk-grid-small uk-flex-middle" uk-grid>
                    <div class="uk-width-expand">
                      <h3 class="uk-card-title uk-margin-remove-bottom"><b>${entity.getElementsByTagName("title")[0].textContent}</b></h3>
                      <p class="uk-text-meta uk-margin-remove-top">
                        <time datetime="2016-04-01T19:00">${entity.getElementsByTagName("pubDate")[0].textContent.split(':')[0].slice(0, -2)}</time>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="uk-card-media-top">
                  ${postImageWithAlt}
                </div>
                <div class="uk-card-body">
                  <p>${editedPostText}</p>
                </div>
                <div class="uk-card-footer">
                  <a href="${entity.getElementsByTagName("link")[0].textContent}" target="_blank" class="uk-button uk-button-text" rel="noreferrer">Go to Post</a>
                </div>
              </div>
            </div>
          `);
        }
      }
    });

  // Get repos data from GitHub.
  getReposData()
    .then(repos => {
      repos.sort((a, b) => (a.value.stars < b.value.stars) ? 1 : -1);

      for (repo of repos) {
        $('.repos').append(`
          <div>
            <div class="uk-card uk-card-default">
              <div class="uk-card-header">
                <div class="uk-grid-small uk-flex-middle" uk-grid>
                  <div class="uk-width-expand">
                    <h3 class="uk-card-title uk-margin-remove-bottom"><b>${repo.name}</b></h3>
                  </div>
                </div>
              </div>
              <div class="uk-card-media-top">
                <a href="${repo.value.url}" target="_blank" rel="noreferrer">
                  <p style="display: none">A GitHub project hero cover</p>
                  <img src="img/projects/${repo.url}.webp" alt="A GitHub project hero cover">
                </a>
              </div>
              <div class="uk-card-body">
                <p>${repo.value.description}</p>
              </div>
              <div class="uk-card-footer">
                <span class="left">
                  <i class="fas fa-star"></i>
                  ${repo.value.stars}
                </span>
                <span class="right">
                  <i class="fal fa-code-merge"></i>
                  ${repo.value.forks}
                </span>
              </div>
            </div>
          </div>
        `);
      };
    });
});
