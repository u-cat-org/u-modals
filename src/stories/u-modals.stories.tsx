import type { Meta, StoryObj } from '@storybook/react';
import { UModal, UModalProvider, useModals } from '../../lib';
import { UButton } from './common/Button/Button.tsx';


const meta: Meta<typeof UModal> = {
  component: UModal,
  title: 'UModal',
  tags: [ 'autodocs' ],
  argTypes: {
    header: {
      type: 'string',
      description: 'Header text',
      control: { type: 'text' }
    },
    body: {
      type: 'string',
      description: 'Body text',
      control: { type: 'text' }
    }
  }
};
export default meta;
type Story = StoryObj<typeof UModal>;

function WrapperComponent() {
  const { showModal } = useModals();

  function onButtonClickHandler() {
    showModal(
      'Title', <UButton onClick={ onButtonClickHandler }>Show modal</UButton>
    );
  }

  return (
    <UButton onClick={ onButtonClickHandler }>Show modal</UButton>
  );
}

export const Single: Story = {
  args: {
    header: 'Header',
    body: 'Body'
  },
  render: () => {
    return <div>
      <UModalProvider>
        <WrapperComponent></WrapperComponent>
      </UModalProvider>
    </div>
  }
};

