import { getStoryblokApi, storyblokEditable } from '@storyblok/react/rsc';
import { useEffect, useState } from 'react';
import {
    AllArticlesProps,
    Article,
    ArticleContent,
} from '../../../types/types';
import H2 from '../../elements/typography/H2';
import ArticleTeaser from './ArticleTeaser';
import ContentWidth from '../../layouts/ContentWidth';

const AllArticles = ({
    blok,
    version,
}: AllArticlesProps & { version: string }) => {
    const [articles, setArticles] = useState<Article[]>([]);
    useEffect(() => {
        const getArticles = async () => {
            const storyblokApi = getStoryblokApi();
            const validVersion = version as 'draft' | 'published' | undefined;
            const { data } = await storyblokApi.get(`cdn/stories`, {
                version: validVersion,
                starts_with: 'all-articles/',
                is_startpage: false,
            });

            setArticles(() =>
                data.stories.map(
                    (article: {
                        uuid: string;
                        content: ArticleContent;
                        slug: string;
                    }) => {
                        article.content.slug = article.slug;
                        return article;
                    }
                )
            );
        };
        getArticles();
    }, []);
    return (
        <ContentWidth>
            <H2>{blok.headline}</H2>
            <div
                className="mx-auto grid w-full grid-cols-1 gap-6 md:px-16 lg:grid-cols-3 lg:px-24"
                {...storyblokEditable(blok)}
            >
                {articles[0] &&
                    articles.map((article) => (
                        <ArticleTeaser
                            article={article.content}
                            key={article.uuid}
                        />
                    ))}
            </div>
        </ContentWidth>
    );
};
export default AllArticles;
