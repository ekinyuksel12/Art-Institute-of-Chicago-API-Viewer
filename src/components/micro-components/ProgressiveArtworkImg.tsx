//Type definations for the props object
interface props {
  src: string,
  id: string,
  className: string
}

//This function hiddes the parent div and makes the real img visible when called.
//It gets an event as a parameter from the img.
//Call this function when from the 'onLoad' attribute of the img element.
function handleImageLoad(e: React.SyntheticEvent<HTMLImageElement, Event>) {
  const placeholder = e.currentTarget.parentElement
  const image = e.currentTarget

  e.currentTarget.classList.remove('hidden')

  if (placeholder) placeholder.classList.add('bg-transparent')
  if (image) image.classList.add('opacity-100')
}



/**
 * A simple IMG lazy loading handler component.
 *
 * @param {string} [src=''] Source of the image
 * @param {string} [id='image'] Id that is going to be use for the placeholder div (ex. Artwork1_placeholder)
 * @param {string} [className=''] Pass along the tailwind and css classes
 */

const ProgressiveArtworkImg = ({src = '', id = 'image', className = ''}: props) => {
  return (
    //In the begining it creates a img element inside a div element. Once it finishes loading img elemnent calls a function tu hide the div.
    <div id={id + '_placeholder'}
      className={className + ' bg-gray-900 transition-all ease-out duration-[3s]'}>

      <img src={src} alt="" onLoad={(e) => { handleImageLoad(e) }}
        className='object-cover w-full h-full object-[center_20%] opacity-0 transition-all ease-out duration-[1s] aspect-square rounded-xl' />
    </div>
  );
};
export default ProgressiveArtworkImg;