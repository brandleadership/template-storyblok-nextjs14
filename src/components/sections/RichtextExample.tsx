import { storyblokEditable } from '@storyblok/react/rsc';

const RichtextExample = ({ blok }: any) => (
    <section {...storyblokEditable(blok)}>
        <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
            <p className="mb-8 text-lg font-normal text-gray-500 sm:px-16 lg:text-xl xl:px-48"></p>
        </div>
    </section>
);

export default RichtextExample;
