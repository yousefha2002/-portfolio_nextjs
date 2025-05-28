import Container from '@/components/ui/Container';
import WorkBox from '@/components/WorkBox';
import porjects from '@/dummy/porjects';
import React from 'react';

export default function Page() {
    return (
        <Container className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-8">
            {porjects.map((item) => (
                <WorkBox
                    key={item.id}
                    image={item.images[0]}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    githubLink={item.githubLink}
                />
            ))}
        </Container>
    );
}