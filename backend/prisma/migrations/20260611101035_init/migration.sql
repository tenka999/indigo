-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `User_username_key`(`username`),
    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DataProyek` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `namaProyek` VARCHAR(191) NOT NULL,
    `deskripsi` TEXT NOT NULL,
    `kategori` ENUM('Residential', 'Commercial', 'Installation') NOT NULL,
    `luasBangunan` DOUBLE NOT NULL,
    `lokasiKota` VARCHAR(191) NOT NULL,
    `tanggalMulai` DATETIME(3) NOT NULL,
    `tanggalSelesai` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Media` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dataProyekId` INTEGER NOT NULL,
    `url` TEXT NOT NULL,
    `tipeMedia` ENUM('Portrait', 'Landscape') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FormulirKontak` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `namaLengkap` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `telepon` VARCHAR(191) NOT NULL,
    `rencanaAnggaran` ENUM('Under_500M', 'Between_500M_1B', 'Over_1B') NOT NULL,
    `pesan` TEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StudioProfile` (
    `id` INTEGER NOT NULL DEFAULT 1,
    `namaStudio` VARCHAR(191) NOT NULL DEFAULT 'SUMBU',
    `tagline` VARCHAR(191) NOT NULL,
    `tentangStudio` TEXT NOT NULL,
    `alamatKantor` TEXT NOT NULL,
    `linkInstagram` VARCHAR(191) NULL,
    `nomorWhatsApp` VARCHAR(191) NOT NULL,
    `emailKontak` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Media` ADD CONSTRAINT `Media_dataProyekId_fkey` FOREIGN KEY (`dataProyekId`) REFERENCES `DataProyek`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
