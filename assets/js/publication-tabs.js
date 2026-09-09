(function () {
  document.querySelectorAll('.publications').forEach(function (section) {
    var tablist = section.querySelector('.publication-tabs');
    if (!tablist) return;

    var tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));

    function activateTab(activeTab) {
      tabs.forEach(function (tab) {
        var selected = tab === activeTab;
        tab.setAttribute('aria-selected', String(selected));
        tab.tabIndex = selected ? 0 : -1;
        document.getElementById(tab.getAttribute('aria-controls')).hidden = !selected;
      });
    }

    tabs.forEach(function (tab, index) {
      tab.addEventListener('click', function () {
        activateTab(tab);
      });
      tab.addEventListener('keydown', function (event) {
        var nextIndex;
        if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length;
        else if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length;
        else if (event.key === 'Home') nextIndex = 0;
        else if (event.key === 'End') nextIndex = tabs.length - 1;
        else return;

        event.preventDefault();
        activateTab(tabs[nextIndex]);
        tabs[nextIndex].focus();
      });
    });

    activateTab(tabs[0]);
    section.classList.add('tabs-ready');
    tablist.hidden = false;
  });
})();
