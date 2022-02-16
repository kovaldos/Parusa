// Смена картинок в фильтре - начало -
const initChangePic = () => {
  const parentList = document.querySelector('.size-and-price__filter-list.list-type');
  const picBoxSquare = document.querySelector('.pic--square');
  const picBoxAlbum = document.querySelector('.pic--album');
  const picBoxPortrait = document.querySelector('.pic--portrait');
  if (parentList && picBoxSquare && picBoxAlbum && picBoxPortrait) {
    const inputs = parentList.querySelectorAll('.size-and-price__filter-switch');
    inputs.forEach((input) => {
      input.addEventListener('input', () => {
        if (input.value === 'Альбомные' || input.value === 'Панорамные') {
          picBoxAlbum.classList.remove('is-hidden');
          picBoxPortrait.classList.add('is-hidden');
          picBoxSquare.classList.add('is-hidden');

        } if (input.value === 'Портретные') {
          picBoxPortrait.classList.remove('is-hidden');
          picBoxAlbum.classList.add('is-hidden');
          picBoxSquare.classList.add('is-hidden');

        } if (input.value === 'Квадратные') {
          picBoxSquare.classList.remove('is-hidden');
          picBoxPortrait.classList.add('is-hidden');
          picBoxAlbum.classList.add('is-hidden');
        }
      });
    });
  }
};
export {initChangePic};
// Смена картинок в фильтре - конец -
