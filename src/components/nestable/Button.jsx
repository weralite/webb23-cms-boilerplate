// components/Button.js
export default function Button({ blok }) {
    return (
      <a
        href={blok?.link}
        className="inline-block mt-4 px-6 py-3 bg-black text-white font-medium text-sm rounded-none hover:bg-gray-800 text-center"
      >
        {blok?.button_text}
      </a>
    );
  }
  