import '@/styles/mxmzFooterAnimation.css';

export default function AnimateTriangle() {
  return (
    <div className="relative w-11/12 sm:w-3/4 mx-auto lg:w-[500px] xl:w-[650px] aspect-square">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 700 700"
        className="absolute top-0 left-0 object-contain"
      >
        <title>Animated Triangle 1</title>
        <path
          className="triangulo1"
          d="M390.9,127l299.6,228.1L9.5,573L390.9,127z"
          fill="none"
          stroke="#ff3644"
          strokeWidth={5}
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 700 700"
        className="absolute top-0 left-0 object-contain"
      >
        <title>Animated Triangle 2</title>
        <path
          className="triangulo2"
          d="M623.1,142.9L400.7,608.4L76.9,91.6L623.1,142.9z"
          fill="none"
          stroke="#ff3644"
          strokeWidth={5}
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 700 700"
        className="absolute top-0 left-0 object-contain"
      >
        <title>Animated Triangle 3</title>
        <path
          className="triangulo3"
          d="M110,554l480,66.7L194,79.3L110,554z"
          fill="none"
          stroke="#ff3644"
          strokeWidth={5}
        />
      </svg>
    </div>
  );
}
