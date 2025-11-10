'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Grid, List } from 'lucide-react';

interface CollectionGalleryProps {
  isOpen: boolean;
  onClose: () => void;
  collectionSlug: string;
}

// Gallery images for each collection
const galleryImages: Record<string, string[]> = {
  'dining-tables': [
    '/redsize/dining_and_tables_0068_polished_stone_dining_table.webp',
    '/redsize/dining_and_tables_0069_polished_stone_dining_table.webp',
    '/redsize/dining_and_tables_0070_stonetop_rectangular_dining_table.webp',
    '/redsize/dining_and_tables_0071_stone_dining_table_surface.webp',
    '/redsize/dining_and_tables_0072_luxury_stone_dining_table.webp',
    '/redsize/dining_and_tables_0073_luxury_stone_dining_table.webp',
    '/redsize/dining_and_tables_0074_luxury_stone_dining_table.webp',
    '/redsize/dining_and_tables_0075_rectangular_stone_dining_table.webp',
    '/redsize/dining_and_tables_0076_rectangular_stone_dining_table.webp',
    '/redsize/dining_and_tables_0077_rectangular_stone_dining_table.webp',
    '/redsize/dining_and_tables_0078_rectangular_stone_dining_table.webp',
    '/redsize/dining_and_tables_0079_large_stone_dining_table.webp',
    '/redsize/dining_and_tables_0080_large_polished_stone_table.webp',
    '/redsize/dining_and_tables_0081_rectangular_stone_dining_table.webp',
    '/redsize/dining_and_tables_0082_rectangular_stone_dining_table.webp',
    '/redsize/dining_and_tables_0083_large_marble_dining_table.webp',
    '/redsize/dining_and_tables_0084_rectangular_stone_dining_table.webp',
    '/redsize/dining_and_tables_0085_polished_stone_dining_table.webp',
    '/redsize/dining_and_tables_0086_rectangular_stone_dining_table.webp',
    '/redsize/dining_and_tables_0087_rectangular_stone_dining_table.webp',
    '/redsize/dining_and_tables_0088_large_marble_dining_table.webp',
    '/redsize/dining_and_tables_0089_stone_top_dining_table.webp',
    '/redsize/dining_and_tables_0090_large_stone_dining_table.webp',
    '/redsize/dining_and_tables_0091_stone_dining_table_setup.webp',
    '/redsize/dining_and_tables_0092_stone_dining_table_setup.webp',
    '/redsize/dining_and_tables_0093_large_stone_dining_table.webp',
    '/redsize/dining_and_tables_0094_polished_stone_dining_table.webp',
    '/redsize/dining_and_tables_0095_agate_stone_dining_table.webp',
    '/redsize/dining_and_tables_0096_stone_agate_dining_table.webp',
    '/redsize/dining_and_tables_0097_polished_agate_dining_table.webp',
    '/redsize/dining_and_tables_0098_agate_stone_dining_table.webp',
    '/redsize/dining_and_tables_0099_modern_stone_dining_table.webp',
    '/redsize/dining_and_tables_0100_polished_stone_table_surface.webp',
    '/redsize/dining_and_tables_0101_large_stone_dining_table.webp',
    '/redsize/dining_and_tables_0102_large_stone_dining_table.webp',
    '/redsize/dining_and_tables_0103_large_stone_dining_table.webp',
    '/redsize/dining_and_tables_0104_polished_stone_dining_table.webp',
    '/redsize/dining_and_tables_0105_polished_stone_dining_table.webp',
    '/redsize/dining_and_tables_0106_rectangular_stone_dining_table.webp',
    '/redsize/dining_and_tables_0107_stonetop_dining_table.webp',
    '/redsize/dining_and_tables_0108_rectangular_stone_dining_table.webp',
    '/redsize/dining_and_tables_0109_rectangular_stone_dining_table.webp',
    '/redsize/dining_and_tables_0110_polished_stone_dining_table.webp',
    '/redsize/dining_and_tables_0111_polished_stone_dining_table.webp',
    '/redsize/dining_and_tables_0112_large_marble_dining_table.webp',
    '/redsize/dining_and_tables_0113_large_marble_dining_table.webp',
    '/redsize/dining_and_tables_0114_stonetop_rectangular_dining_table.webp',
    '/redsize/dining_and_tables_0115_polished_stone_dining_table.webp',
    '/redsize/dining_and_tables_0116_stonetop_dining_table.webp',
    '/redsize/dining_and_tables_0117_polished_stone_dining_table.webp',
    '/redsize/dining_and_tables_0118_polished_stone_dining_table.webp',
    '/redsize/dining_and_tables_0119_stone_top_dining_table.webp',
    '/redsize/dining_and_tables_0120_stone_top_dining_table.webp',
    '/redsize/dining_and_tables_0121_stone_dining_table_setup.webp',
    '/redsize/dining_and_tables_0122_stone_top_dining_table.webp',
    '/redsize/dining_and_tables_0123_polished_stone_dining_table.webp',
    '/redsize/dining_and_tables_0124_polished_stone_dining_table.webp',
    '/redsize/dining_and_tables_0125_polished_petrified_wood_table.webp',
    '/redsize/dining_and_tables_0126_polished_stone_dining_table.webp',
    '/redsize/dining_and_tables_0127_rectangular_stone_dining_table.webp',
    '/redsize/dining_and_tables_0128_large_stone_dining_table.webp',
    '/redsize/dining_and_tables_0129_large_polished_stone_table.webp',
    '/redsize/dining_and_tables_0176_round_stone_dining_table.webp',
    '/redsize/dining_and_tables_0177_round_stone_dining_table.webp',
    '/redsize/dining_and_tables_0178_round_stone_dining_table.webp',
    '/redsize/dining_and_tables_0179_round_marble_dining_table.webp',
    '/redsize/dining_and_tables_0180_round_stone_dining_table.webp',
    '/redsize/dining_and_tables_0181_round_stone_dining_table.webp',
    '/redsize/dining_and_tables_0182_round_stone_dining_table.webp',
    '/redsize/dining_and_tables_0183_round_stone_dining_table.webp',
    '/redsize/dining_and_tables_0184_round_stonetop_dining_table.webp',
    '/redsize/dining_and_tables_0185_round_stone_dining_table.webp',
    '/redsize/dining_and_tables_0186_rectangular_marble_dining_table.webp',
    '/redsize/dining_and_tables_0187_large_marble_dining_table.webp',
    '/redsize/dining_and_tables_0188_rectangular_marble_dining_table.webp',
    '/redsize/dining_and_tables_0189_rectangular_marble_dining_table.webp',
    '/redsize/dining_and_tables_0190_marble_stone_dining_table.webp',
    '/redsize/dining_and_tables_0191_polished_stone_dining_table.webp',
    '/redsize/dining_and_tables_0192_stone_dining_table_setup.webp',
    '/redsize/dining_and_tables_0193_stone_dining_table_setup.webp',
    '/redsize/dining_and_tables_0194_polished_stone_dining_table.webp',
    '/redsize/dining_and_tables_0195_stone_dining_table_setup.webp',
    '/redsize/dining_and_tables_0196_oval_marble_dining_table.webp',
    '/redsize/dining_and_tables_0197_oval_stone_dining_table.webp',
    '/redsize/dining_and_tables_0198_oval_marble_dining_table.webp',
    '/redsize/dining_and_tables_0199_oval_marble_dining_table.webp',
    '/redsize/dining_and_tables_0200_rectangular_stone_dining_table.webp',
    '/redsize/dining_and_tables_0201_polished_stone_dining_table.webp',
    '/redsize/dining_and_tables_0202_large_stone_dining_table.webp',
    '/redsize/dining_and_tables_0203_polished_stone_dining_table.webp',
    '/redsize/dining_and_tables_0204_large_stone_dining_table.webp',
  ],
  'idols-and-temples': [
    '/redsize/idols_and_temples_0001_black_stone_buddha_idol.webp',
    '/redsize/idols_and_temples_0002_black_stone_buddha_idol.webp',
    '/redsize/idols_and_temples_0003_black_stone_buddha_statue.webp',
    '/redsize/idols_and_temples_0004_black_stone_spiritual_statue.webp',
    '/redsize/idols_and_temples_0005_black_stone_buddha_idol.webp',
    '/redsize/idols_and_temples_0006_black_stone_buddha_idol.webp',
    '/redsize/idols_and_temples_0007_black_stone_religious_idol.webp',
    '/redsize/idols_and_temples_0008_black_stone_buddha_idol.webp',
    '/redsize/idols_and_temples_0009_black_stone_religious_statue.webp',
    '/redsize/idols_and_temples_0010_black_stone_deity_statue.webp',
    '/redsize/idols_and_temples_0011_black_stone_buddha_statue.webp',
    '/redsize/idols_and_temples_0014_white_stone_deity_idol.webp',
    '/redsize/idols_and_temples_0015_white_marble_religious_idol.webp',
    '/redsize/idols_and_temples_0016_white_marble_deity_statue.webp',
    '/redsize/idols_and_temples_0017_white_marble_deity_idol.webp',
    '/redsize/idols_and_temples_0018_white_marble_deity_idol.webp',
    '/redsize/idols_and_temples_0019_pair_of_religious_idols.webp',
    '/redsize/idols_and_temples_0020_ornate_stone_religious_idols.webp',
    '/redsize/idols_and_temples_0021_ornate_religious_deity_idol.webp',
    '/redsize/idols_and_temples_0022_colorful_stone_deity_idol.webp',
    '/redsize/idols_and_temples_0023_marble_hindu_deity_idol.webp',
    '/redsize/idols_and_temples_0024_ornate_stone_deity_statue.webp',
    '/redsize/idols_and_temples_0025_ornate_stone_deity_statue.webp',
    '/redsize/idols_and_temples_0026_painted_spiritual_stone_carving.webp',
    '/redsize/idols_and_temples_0027_marble_deity_statue_sculpture.webp',
    '/redsize/idols_and_temples_0028_marble_deity_statue_sculpture.webp',
    '/redsize/idols_and_temples_0029_white_and_gold_buddha_idol.webp',
    '/redsize/idols_and_temples_0030_white_and_gold_deity_statue.webp',
    '/redsize/idols_and_temples_0034_colorful_religious_stone_idols.webp',
    '/redsize/idols_and_temples_0035_marble_religious_deity_statues.webp',
    '/redsize/idols_and_temples_0036_marble_religious_deity_sculptures.webp',
    '/redsize/idols_and_temples_0037_white_marble_deity_idols.webp',
    '/redsize/idols_and_temples_0038_white_stone_deity_sculptures.webp',
    '/redsize/idols_and_temples_0039_white_marble_religious_idol.webp',
    '/redsize/idols_and_temples_0040_intricate_stone_deity_carving.webp',
    '/redsize/idols_and_temples_0041_intricate_stone_deity_carving.webp',
    '/redsize/idols_and_temples_0042_white_marble_temple_idol.webp',
    '/redsize/idols_and_temples_0043_ornate_marble_temple_structure.webp',
    '/redsize/idols_and_temples_0044_white_marble_temple_structures.webp',
    '/redsize/idols_and_temples_0045_white_marble_temple_structure.webp',
    '/redsize/idols_and_temples_0046_intricate_marble_home_temple.webp',
    '/redsize/idols_and_temples_0047_carved_stone_temple_structure.webp',
    '/redsize/idols_and_temples_0048_intricate_marble_temple_shrine.webp',
    '/redsize/idols_and_temples_0049_intricate_marble_home_temple.webp',
    '/redsize/idols_and_temples_0050_white_marble_home_temple.webp',
    '/redsize/idols_and_temples_0051_intricate_marble_pooja_temple.webp',
    '/redsize/idols_and_temples_0052_ornate_stone_deity_statue.webp',
    '/redsize/idols_and_temples_0053_ornate_stone_deity_idol.webp',
    '/redsize/idols_and_temples_0054_white_marble_religious_statue.webp',
    '/redsize/idols_and_temples_0055_white_marble_religious_statue.webp',
    '/redsize/idols_and_temples_0056_white_marble_spiritual_statue.webp',
    '/redsize/idols_and_temples_0057_white_stone_sitting_deity.webp',
    '/redsize/idols_and_temples_0058_stone_spiritual_statue_idol.webp',
    '/redsize/idols_and_temples_0059_large_stone_buddha_statue.webp',
    '/redsize/idols_and_temples_0060_large_stone_buddha_statue.webp',
    '/redsize/idols_and_temples_0061_large_stone_buddha_statue.webp',
    '/redsize/idols_and_temples_0062_large_stone_buddha_statue.webp',
    '/redsize/idols_and_temples_0063_stone_reclining_deity_statue.webp',
    '/redsize/idols_and_temples_0222_stone_buddha_relief_panel.webp',
    '/redsize/idols_and_temples_0223_stone_buddha_relief_panel.webp',
    '/redsize/idols_and_temples_0224_stone_buddha_relief_panel.webp',
    '/redsize/idols_and_temples_0225_stone_buddha_relief_sculpture.webp',
    '/redsize/idols_and_temples_0226_stone_buddha_relief_carving.webp',
    '/redsize/idols_and_temples_0314_stone_bust_mother_child.webp',
    '/redsize/idols_and_temples_0327_marble_religious_deity_statues.webp',
    '/redsize/idols_and_temples_0328_stone_religious_deity_idols.webp',
  ],
  'home-decor': [
    '/redsize/home_decor_0012_ornate_carved_stone_wall.webp',
    '/redsize/home_decor_0013_ornate_carved_stone_wallpiece.webp',
    '/redsize/home_decor_0031_ornate_carved_stone_sculpture.webp',
    '/redsize/home_decor_0032_ornate_carved_stone_sculpture.webp',
    '/redsize/home_decor_0033_ornate_carved_stone_bust.webp',
    '/redsize/home_decor_0064_carved_stone_lion_sculpture.webp',
    '/redsize/home_decor_0065_stone_lion_decorative_sculpture.webp',
    '/redsize/home_decor_0066_carved_stone_lion_sculpture.webp',
    '/redsize/home_decor_0160_stone_freestanding_wash_basin.webp',
    '/redsize/home_decor_0161_stone_pedestal_wash_basin.webp',
    '/redsize/home_decor_0162_freestanding_stone_wash_basin.webp',
    '/redsize/home_decor_0163_cylindrical_stone_wash_basin.webp',
    '/redsize/home_decor_0164_cylindrical_marble_decorative_piece.webp',
    '/redsize/home_decor_0165_cylindrical_stone_basin_decor.webp',
    '/redsize/home_decor_0166_tall_flared_stone_vase.webp',
    '/redsize/home_decor_0167_freestanding_stone_wash_basin.webp',
    '/redsize/home_decor_0168_sculptural_stone_decor_piece.webp',
    '/redsize/home_decor_0169_freestanding_stone_wash_basin.webp',
    '/redsize/home_decor_0170_polished_stone_wash_basin.webp',
    '/redsize/home_decor_0218_carved_stone_tree_panel.webp',
    '/redsize/home_decor_0296_decorative_stone_lady_sculptures.webp',
    '/redsize/home_decor_0297_decorative_stone_lady_sculptures.webp',
    '/redsize/home_decor_0298_classical_stone_lady_statues.webp',
    '/redsize/home_decor_0299_decorative_stone_woman_statue.webp',
    '/redsize/home_decor_0300_classical_stone_lady_sculpture.webp',
    '/redsize/home_decor_0301_ornate_marble_lady_sculpture.webp',
    '/redsize/home_decor_0302_ornate_marble_female_sculpture.webp',
    '/redsize/home_decor_0303_marble_decorative_female_statue.webp',
    '/redsize/home_decor_0304_decorative_marble_lady_sculpture.webp',
    '/redsize/home_decor_0305_marble_decorative_bust_sculpture.webp',
    '/redsize/home_decor_0306_decorative_marble_bust_sculpture.webp',
    '/redsize/home_decor_0307_decorative_marble_bust_sculpture.webp',
    '/redsize/home_decor_0308_decorative_stone_child_sculpture.webp',
    '/redsize/home_decor_0309_stone_decorative_bust_sculpture.webp',
    '/redsize/home_decor_0310_ornate_floral_stone_sculpture.webp',
    '/redsize/home_decor_0311_ornate_stone_lady_sculpture.webp',
    '/redsize/home_decor_0312_decorative_stone_bust_sculpture.webp',
    '/redsize/home_decor_0313_decorative_stone_bust_sculpture.webp',
    '/redsize/home_decor_0315_decorative_stone_child_sculpture.webp',
    '/redsize/home_decor_0316_ornate_classical_stone_sculptures.webp',
    '/redsize/home_decor_0317_decorative_stone_lady_statues.webp',
    '/redsize/home_decor_0318_decorative_stone_lady_statues.webp',
    '/redsize/home_decor_0319_decorative_marble_lady_statues.webp',
    '/redsize/home_decor_0320_decorative_stone_lady_statues.webp',
    '/redsize/home_decor_0321_classical_stone_lady_statues.webp',
    '/redsize/home_decor_0322_large_striped_stone_vase.webp',
    '/redsize/home_decor_0323_large_striped_stone_vase.webp',
    '/redsize/home_decor_0324_striped_stone_decorative_pot.webp',
    '/redsize/home_decor_0325_striped_stone_decorative_pot.webp',
    '/redsize/home_decor_0326_ornate_marble_decorative_sculpture.webp',
    '/redsize/home_decor_0329_stone_wash_basins_displayed.webp',
    '/redsize/home_decor_0330_stone_washbasins_on_display.webp',
    '/redsize/home_decor_0331_stone_wash_basins_display.webp',
    '/redsize/home_decor_0332_decorative_carved_wall_panels.webp',
  ],
  'fountain': [
    '/redsize/fountain_0208_ornate_carved_stone_fountain.webp',
    '/redsize/fountain_0209_ornate_tiered_stone_fountain.webp',
    '/redsize/fountain_0210_ornate_tiered_stone_fountain.webp',
    '/redsize/fountain_0211_ornate_tiered_stone_fountains.webp',
    '/redsize/fountain_0212_carved_multitier_stone_fountains.webp',
    '/redsize/fountain_0213_tiered_stone_decorative_fountains.webp',
  ],
  'wall-cladding': [
    '/redsize/stone_cladding_0214_stone_carved_tree_panel.webp',
    '/redsize/stone_cladding_0215_carved_stone_tree_panel.webp',
    '/redsize/stone_cladding_0216_carved_stone_wall_panel.webp',
    '/redsize/stone_cladding_0217_carved_stone_wall_panel.webp',
    '/redsize/stone_cladding_0219_carved_stone_wall_panel.webp',
    '/redsize/stone_cladding_0220_carved_decorative_wall_panel.webp',
    '/redsize/stone_cladding_0221_carved_floral_fish_panel.webp',
    '/redsize/stone_cladding_0227_carved_stone_wall_panel.webp',
    '/redsize/stone_cladding_0228_textured_stone_wall_panels.webp',
    '/redsize/stone_cladding_0229_textured_stone_wall_panels.webp',
    '/redsize/stone_cladding_0230_textured_stone_wall_panels.webp',
    '/redsize/stone_cladding_0231_textured_stone_wall_panels.webp',
    '/redsize/stone_cladding_0232_textured_stone_wall_panels.webp',
    '/redsize/stone_cladding_0233_textured_stone_wall_panels.webp',
    '/redsize/stone_cladding_0234_textured_stone_wall_panels.webp',
    '/redsize/stone_cladding_0235_stone_wall_cladding_tiles.webp',
    '/redsize/stone_cladding_0236_stone_wall_cladding_tiles.webp',
    '/redsize/stone_cladding_0237_textured_stone_wall_panels.webp',
    '/redsize/stone_cladding_0238_dark_stone_wall_panels.webp',
    '/redsize/stone_cladding_0239_dark_stone_wall_tiles.webp',
    '/redsize/stone_cladding_0240_dark_stone_wall_panels.webp',
    '/redsize/stone_cladding_0241_decorative_textured_stone_panels.webp',
    '/redsize/stone_cladding_0242_textured_stone_wall_panels.webp',
    '/redsize/stone_cladding_0243_textured_stone_wall_panels.webp',
    '/redsize/stone_cladding_0244_decorative_stone_wall_panels.webp',
    '/redsize/stone_cladding_0245_textured_stacked_stone_panels.webp',
    '/redsize/stone_cladding_0246_stacked_stone_wall_panels.webp',
    '/redsize/stone_cladding_0247_textured_stone_wall_panels.webp',
    '/redsize/stone_cladding_0248_textured_vertical_stone_panels.webp',
    '/redsize/stone_cladding_0249_contrasting_stone_wall_tiles.webp',
    '/redsize/stone_cladding_0250_contrasting_stone_wall_panels.webp',
    '/redsize/stone_cladding_0251_textured_stone_wall_panels.webp',
    '/redsize/stone_cladding_0252_rectangular_stone_wall_panels.webp',
    '/redsize/stone_cladding_0253_textured_stone_wall_panels.webp',
    '/redsize/stone_cladding_0254_textured_stone_wall_panels.webp',
    '/redsize/stone_cladding_0255_textured_vertical_stone_panels.webp',
    '/redsize/stone_cladding_0256_textured_stone_wall_panels.webp',
    '/redsize/stone_cladding_0257_textured_stone_wall_panels.webp',
    '/redsize/stone_cladding_0258_textured_stone_wall_panels.webp',
    '/redsize/stone_cladding_0259_3d_textured_wall_panels.webp',
    '/redsize/stone_cladding_0260_textured_3d_wall_panels.webp',
    '/redsize/stone_cladding_0261_textured_stone_wall_panels.webp',
    '/redsize/stone_cladding_0262_decorative_textured_wall_panels.webp',
    '/redsize/stone_cladding_0263_decorative_textured_wall_panels.webp',
    '/redsize/stone_cladding_0264_decorative_textured_wall_panels.webp',
    '/redsize/stone_cladding_0265_textured_stone_wall_panels.webp',
    '/redsize/stone_cladding_0266_textured_3d_wall_panels.webp',
    '/redsize/stone_cladding_0267_textured_stone_wall_panels.webp',
    '/redsize/stone_cladding_0268_textured_stone_wall_panels.webp',
    '/redsize/stone_cladding_0269_textured_stone_wall_panels.webp',
    '/redsize/stone_cladding_0270_textured_stone_wall_panels.webp',
    '/redsize/stone_cladding_0271_stacked_stone_wall_panels.webp',
    '/redsize/stone_cladding_0272_textured_stone_wall_panels.webp',
    '/redsize/stone_cladding_0273_stacked_stone_wall_panels.webp',
    '/redsize/stone_cladding_0274_stone_wall_cladding_panels.webp',
    '/redsize/stone_cladding_0275_textured_stone_wall_panels.webp',
    '/redsize/stone_cladding_0276_vertical_stone_cladding_panels.webp',
    '/redsize/stone_cladding_0277_textured_stone_wall_panels.webp',
    '/redsize/stone_cladding_0278_textured_geometric_wall_panels.webp',
    '/redsize/stone_cladding_0279_decorative_textured_wall_panels.webp',
    '/redsize/stone_cladding_0280_textured_stone_wall_panels.webp',
    '/redsize/stone_cladding_0281_textured_geometric_wall_panels.webp',
    '/redsize/stone_cladding_0282_textured_geometric_wall_panels.webp',
    '/redsize/stone_cladding_0283_3d_textured_wall_panels.webp',
    '/redsize/stone_cladding_0284_3d_patterned_wall_panels.webp',
    '/redsize/stone_cladding_0285_3d_patterned_wall_panel.webp',
    '/redsize/stone_cladding_0286_intricately_carved_stone_panel.webp',
    '/redsize/stone_cladding_0287_intricately_carved_wall_panel.webp',
    '/redsize/stone_cladding_0288_decorative_textured_stone_panels.webp',
    '/redsize/stone_cladding_0289_decorative_textured_wall_panels.webp',
    '/redsize/stone_cladding_0290_decorative_textured_wall_panels.webp',
    '/redsize/stone_cladding_0291_intricate_carved_wall_panel.webp',
    '/redsize/stone_cladding_0292_intricately_carved_wall_panel.webp',
    '/redsize/stone_cladding_0293_ornate_carved_wall_panel.webp',
    '/redsize/stone_cladding_0294_textured_geometric_wall_panels.webp',
    '/redsize/stone_cladding_0295_textured_geometric_stone_panels.webp',
  ],
};

const collectionNames: Record<string, string> = {
  'dining-tables': 'Dining Tables',
  'idols-and-temples': 'Idols and Temples',
  'home-decor': 'Home Decor',
  'fountain': 'Fountain',
  'wall-cladding': 'Wall Cladding',
};

const CollectionGallery: React.FC<CollectionGalleryProps> = ({ isOpen, onClose, collectionSlug }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const displayImages = galleryImages[collectionSlug] || [];
  const collectionName = collectionNames[collectionSlug] || 'Collection';

  const handleImageClick = (image: string, index: number) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const handlePrevImage = () => {
    const newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : displayImages.length - 1;
    setCurrentImageIndex(newIndex);
    setSelectedImage(displayImages[newIndex]);
  };

  const handleNextImage = () => {
    const newIndex = currentImageIndex < displayImages.length - 1 ? currentImageIndex + 1 : 0;
    setCurrentImageIndex(newIndex);
    setSelectedImage(displayImages[newIndex]);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Main Gallery Modal */}
      <div className="fixed inset-0 z-50 bg-white overflow-hidden">
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="border-b border-stone-200 bg-white px-6 py-4 flex items-center justify-between sticky top-0 z-10">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-light tracking-wider uppercase text-stone-800">
                {collectionName} Gallery
              </h2>
              <span className="text-sm text-stone-500">
                {displayImages.length} items
              </span>
              <div className="hidden md:flex items-center gap-2 ml-4">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-stone-800 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}
                  aria-label="Grid view"
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('masonry')}
                  className={`p-2 rounded ${viewMode === 'masonry' ? 'bg-stone-800 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}
                  aria-label="Masonry view"
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-stone-100 rounded-full transition-colors"
              aria-label="Close gallery"
            >
              <X className="h-6 w-6 text-stone-700" />
            </button>
          </div>

          {/* Main Gallery Area */}
          <div className="flex-1 overflow-y-auto p-6 bg-gradient-to-br from-stone-50 to-white">
            {displayImages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="text-stone-400 mb-4">
                  <Grid className="h-16 w-16 mx-auto mb-4" />
                </div>
                <h3 className="text-xl font-light text-stone-600 mb-2">No images available</h3>
                <p className="text-stone-500">This collection doesn't have gallery images yet.</p>
              </div>
            ) : (
              <div className={`
                ${viewMode === 'grid' 
                  ? 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4' 
                  : 'columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4'
                }
              `}>
                {displayImages.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => handleImageClick(image, index)}
                    className={`
                      group relative overflow-hidden rounded-lg shadow-md hover:shadow-2xl 
                      transition-all duration-300 cursor-pointer bg-white
                      ${viewMode === 'grid' ? 'aspect-square' : 'break-inside-avoid mb-4'}
                    `}
                  >
                    <Image
                      src={image}
                      alt={`${collectionName} ${index + 1}`}
                      fill={viewMode === 'grid'}
                      width={viewMode === 'masonry' ? 400 : undefined}
                      height={viewMode === 'masonry' ? 400 : undefined}
                      className={`
                        ${viewMode === 'grid' ? 'object-cover' : 'w-full h-auto'}
                        group-hover:scale-110 transition-transform duration-500
                      `}
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-white text-sm font-medium">{index + 1}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6 text-white" />
          </button>

          <button
            onClick={handlePrevImage}
            className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-8 w-8 text-white" />
          </button>

          <button
            onClick={handleNextImage}
            className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight className="h-8 w-8 text-white" />
          </button>

          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center p-4">
            <Image
              src={selectedImage}
              alt={`${collectionName} ${currentImageIndex + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
            <p className="text-white text-sm font-medium">
              {currentImageIndex + 1} / {displayImages.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default CollectionGallery;
