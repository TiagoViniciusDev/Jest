module.exports = {
  testEnvironment: 'jsdom', // Define o ambiente de teste como jsdom
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Transpila arquivos TypeScript e TSX
  },
  moduleNameMapper: {
    '^.+\\.css$': 'identity-obj-proxy', // Mock para arquivos de estilo
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Configuração adicional do Jest
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};

